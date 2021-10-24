FROM python:3.8-slim-buster

WORKDIR /app
COPY alexandresenpai.json /app/alexandresenpai.json
ENV GOOGLE_APPLICATION_CREDENTIALS=/app/alexandresenpai.json
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .
CMD [ "python3", "main.py"]
