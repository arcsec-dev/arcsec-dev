import hashlib
import os
import pickle
import subprocess
import yaml
import requests
from flask import Flask

app = Flask(__name__)

# 1. Command Injection
user_command = input("Command: ")
subprocess.run(user_command, shell=True)

# 2. OS Command Execution
os.system(user_command)

# 3. OS Popen
os.popen(user_command)

# 4. Code Injection
expression = input("Expression: ")
result = eval(expression)

# 5. Dynamic Code Execution
exec(expression)

# 6. Dynamic Compilation
compiled = compile(expression, "<string>", "exec")

# 7. Unsafe Pickle
data = pickle.loads(user_command.encode())

# 8. Unsafe Pickle File
with open("data.pkl", "rb") as f:
    obj = pickle.load(f)

# 9. Unsafe YAML
yaml_data = yaml.load(user_command)

# 10. Weak MD5
password_hash = hashlib.md5(user_command.encode()).hexdigest()

# 11. Weak SHA1
sha1_hash = hashlib.sha1(user_command.encode()).hexdigest()

# 12. Disabled TLS Verification
response = requests.get(
    "https://example.com",
    verify=False
)

# 13. Flask Debug Mode
app.run(
    host="0.0.0.0",
    port=5000,
    debug=True
)