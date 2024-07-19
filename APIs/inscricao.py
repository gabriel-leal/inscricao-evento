from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from connect import execute_insert, create_connect, execute_query
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/inscricao")
async def inscricao(request: Request):
    retorno = await request.body()
    retorno = retorno.decode()
    data = json.loads(retorno)
    dataBase = r'../BDinscricao'
    conn = create_connect(dataBase)
    queryselect = f"""
        select id, nome 
        from inscricao
        where telefone = "{data['telefone']}"
    """
    linhas = execute_query(conn, queryselect)
    msg = 0
    if len(linhas) == 0:
        query = f"""
            insert into inscricao (nome, datanas, telefone, membro)
            VALUES("{data['nome']}","{data['datanas']}","{data['telefone']}","{data['membro']}")
            """
        execute_insert(conn, query)
        
        retorno = execute_query(conn, queryselect)
        msg = {"id": retorno[0][0], "nome": retorno[0][1]}
        msg = json.dumps(msg)
        print(msg)
    else:
        msg = 'jaexiste'
    
    conn.close()
             
    return msg
    
    
    