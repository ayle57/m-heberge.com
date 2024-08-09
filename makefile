# Makefile for Symfony 7.3
dev-server:
	echo "------------------------------------- Starting Symfony Development Server -------------------------------------"
	symfony server:start -d

tests:
	echo "------------------------------------- Running Tests -------------------------------------"
	php bin/phpunit
