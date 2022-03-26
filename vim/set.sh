cp -f vimrc  ~/.vimrc

rm -fr ~/.config/nvim
mkdir -p ~/.config/nvim/autoload
cp -f plug.vim ~/.config/nvim/autoload

cp -f vimrc  ~/.config/nvim/init.vim
