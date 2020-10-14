cd another
gnome-terminal . -- npm run serve:single-spa:another
cd ..
cd my-app
gnome-terminal . -- npm run serve:single-spa:my-app
cd ..
cd shared
gnome-terminal . -- serve -C -l 1234
cd ..
cd web-components
gnome-terminal . -- serve -C
cd ..
cd spa
gnome-terminal . -- npm start