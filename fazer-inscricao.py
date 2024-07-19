import pyautogui
from time import sleep

pyautogui.PAUSE = 0.5

# abrir a página
pyautogui.press("win")
pyautogui.write("chrome")
pyautogui.press("enter")
pyautogui.write("file:///C:/projetos/inscri%C3%A7%C3%A3o%20evento/index.html")
pyautogui.press("enter")  
sleep(1)

# fazer cadastro
pyautogui.click(x=-1342, y=422)
pyautogui.write("Gabriel Leal Menezes")
pyautogui.press("tab")
pyautogui.write("08092004")
pyautogui.press("tab")
pyautogui.write("16992137076")
pyautogui.click(x=-1369, y=695)
       
# enviar
pyautogui.press("tab")
pyautogui.press("tab")
pyautogui.press("enter")        