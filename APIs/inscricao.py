from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from connect import execute_insert, create_connect, execute_query

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
    json = await request.body()
    print(json)
    dataBase = r'../BDinscricao'
    #conn = create_connect(dataBase)
    #query = f"""
    #    insert into cadastro (nome, datanas, telefone, membro)
    #    VALUES("{json['nome']}",{json['']})
    #    """
    #    execute_insert(conn, query)
    