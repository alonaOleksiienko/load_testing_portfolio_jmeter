# API Load Testing Portfolio — JMeter + Docker

This project demonstrates API load testing using Apache JMeter against a Dockerized application.  
The goal is to validate system stability, response time, and performance under load.

## Tech Stack

- Apache JMeter
- Docker Compose
- REST API testing
- JSON assertions
- Performance metrics analysis

## What this project tests

- API health endpoint stability
- API data endpoint performance
- Response validation using assertions
- System behavior under concurrent load

### Endpoints tested

- GET /health
- GET /api/items

## Test configuration

- 50 virtual users
- Ramp-up load simulation
- Response time measurement
- JSON response validation
- Performance metrics collection

## Results

The system remained stable under load.

- Error rate: 0%
- API responded successfully
- Performance metrics collected and analyzed

Execution screenshots and reports are available in the `Jmeter_screenshots_reports` directory.

## Project structure

.
├── app/ # Application under test
├── docker/ # Docker configuration
├── jmeter/ # JMeter test plans and configuration
├── Jmeter_screenshots_reports/ # Test execution results
├── docker-compose.yml
└── Thread Group.jmx # Main JMeter test plan


## Prerequisites

- Docker Desktop
- Apache JMeter

Install JMeter on macOS:

```bash
brew install jmeter
How to run the project
Start the application
docker compose up -d
Verify the application is running:

curl -i http://localhost:3000/health
curl -i http://localhost:3000/api/items
Both endpoints should return 200 OK.

Run JMeter
Start JMeter GUI:

jmeter
Open the test plan:

Thread Group.jmx
Run the test and review results in the listeners.

Key learning outcomes
Load testing API endpoints with JMeter

Performance analysis and metrics interpretation

Testing Dockerized services

Response and JSON assertion validation

Performance testing workflow for QA environments

Purpose of this project
This project is part of a QA portfolio and demonstrates practical experience in performance testing, test design, and system behavior analysis under load conditions.

Git commit and push
From the project root directory:

git add .
git commit -m "Add JMeter load testing portfolio project"
git push origin main
Author
Alona Oleksiienko
QA Automation Engineer
