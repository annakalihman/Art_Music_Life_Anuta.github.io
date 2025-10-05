$msg = Read-Host -Prompt "Введите название изменения"

git pull

Write-Host "Обновление ветки main" -ForegroundColor Blue

git checkout main

git add .
git commit -m "$msg"

Write-Host "Обновление ветки main: Успех" -ForegroundColor Green

Write-Host "Сборка и восстановление зависимостей" -ForegroundColor Blue

npm i
npm exec yarn
npm exec yarn build

Write-Host "Сборка и восстановление зависимостей: Успех" -ForegroundColor Green

Write-Host "Обновление ветки deploy" -ForegroundColor Blue

git checkout deploy

$index = "index.html"
$assets = "assets"

Write-Host "Удаление старых файлов" -ForegroundColor Blue

if (Test-Path -Path $index) {
    Remove-Item -LiteralPath $index -Force -Confirm:$false
}

if (test-Path -Path $assets) {
    Remove-Item -LiteralPath $assets -Force -Recurse -Confirm:$false 
}

Write-Host "Копирование новых файлов сборки" -ForegroundColor Blue

Copy-Item -Path ".\build\*" -Destination ".\"
Remove-Item -Path ".\build" -Force -Recurse -Confirm:$false

$commitId = New-Guid
git add .
git commit -m "build-$commitId"

Write-Host "Обновление ветки deploy: Успех" -ForegroundColor Green

Write-Host "Публикация..." -ForegroundColor Blue

git push main --all

git checkout main