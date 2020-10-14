cd shared
tsc
cd ..
cd ng-shared
ng build ng-shared
cd my-app
npm i ../shared
npm i -s ../ng-shared/dist/ng-shared
cd ..
cd another
npm i ../shared
npm i -s ../ng-shared/dist/ng-shared