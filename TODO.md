TODO
====

1. yeoman replacement
	-	creates a repo from the cmdline
	-	stars the repo
		-	requires a Github secret (arg or env var)
	-	creates the files and directories
	-	initializes the repo
		-	`git init`
		-	`git remote add origin <origin>`
		- 	`git add -A`
		- 	`git commit -m "Add files"`
	-	npm installs
	-	turns on `travis-ci`
	-	open an editor (default to `subl .`)
2. create dirs with included files
	-	module which creates a test `dir` with a stubbed test file
	- 	ditto for stubbed library file
	-	ditto for stubbed example file
	-	ditto for benchmark
		-	option whether to include a benchmark file (default: `false`)
3. ability to filter what is created
	-	e.g., `'Makefile,TODO,packagejson,lib/index.js,lib/validate.js,test/test.js,examples/,...'` etc
	- 	`--file TODO --file makefile`
	-	`--files="TODO,makefile"
	- 	`--dirs=lib,test,benchmark`
4. document a `task` factory `function` and how to manipulate task order
5. tests
6. cli snippet
7. 


// TODO: include git remote task
// TODO: include ci task
// TODO: include star task



#### Notes

``` bash
nodemodule \
	--name "beep" \
	--author "Jane Doe" \
	--email "janedoe@example.com" \
	--desc "Beep boop." \
	--cmd "beepboop" \
	--license "MIT" \
	--no-git \ # don't init git repo
	--no-remote \ # don't create remote Github repo
	--no-star \ # don't star git repo on Github
	--no-ci \ # don't turn on `travis-ci`
	--no-open \ # don't open in text editor
```


Provide a configuration object to allow specifying default options (see `configstore` used by `yo`)
	-	author
	-	email
	-	init
	- 	star
	-	ci
	-	o
		-	which command to use for opening in text editor; e.g., `subl .`

