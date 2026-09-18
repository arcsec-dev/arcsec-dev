FROM python:3.12-slim

WORKDIR /app

# System dependencies:
# - git: required for /repository
# - curl: required to install OpenGrep
RUN apt-get update \
    && apt-get install -y --no-install-recommends git curl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Install the same OpenGrep version tested locally
RUN curl -fsSL https://raw.githubusercontent.com/opengrep/opengrep/main/install.sh \
    | bash -s -- -v v1.27.0 \
    && ln -s /root/.opengrep/cli/latest/opengrep /usr/local/bin/opengrep

# Application
COPY app ./app
COPY opengrep-rules ./opengrep-rules

# Runtime directories
RUN mkdir -p uploads/incoming temp data reports

EXPOSE 10000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "10000"]