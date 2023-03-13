import os
from subprocess import call
call('npm run build', shell=True)
call(f'docker run --rm -d -v {os.getcwd()}/dist:/usr/share/nginx/html -p 8000:80 nginx', shell=True)
print('Build [OK] --> open http://localhost:8000')
