
.PHONY: go
go:
	yarn install
	mkdir -p node_modules/icon
	cp ad.svg node_modules/icon
	yarn webpack
