if [ $# -eq 0 ]
then
   	echo "No arguments supplied"
else
	mkdir "ex$1"
	echo "Created a directory with name 'ex$1'"
fi
