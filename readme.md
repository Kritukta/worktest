
Добро пожаловать в проект МРМ Руководителя CIB

Как запустить:

В Idea

1. Cклонировать:)
2. Запустить установку библиотек с package.json - npm i
3. Запустить npm start
4. в отдельной вкладке npm run watch
5. Открыть в xcode rmrcibmob.xcodeproj и нажать там  play

В Xcode

1. В UfsProjectConfig / bundles нажать +
2. добавить rkmcib - Dictionary
3. В UfsProjectConfig /bundles/ rkmcib нажать +
4. добавить icon -user
path artifacts/bundles/Rkmcib

5. В UfsProjectConfig/devMode
devBundleNameList нажать +
6. добавить item 0 - rkmcib
7. devModeEnable выставить в YES

Если запуск xcode будет неудачным необходимо вручную подключить библиотеку 
ufs-platform
 Открыть каталог node_modules/ufs-mobile-platform/ios/build в корне проекта. 
 Там лежит файл UFSLibrary.framework.В Xcode перетащить в Libraries
