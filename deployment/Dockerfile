FROM httpd:bullseye

COPY ./frontend /frontend
COPY ./backend /backend
COPY docker-startup-script.sh /docker-startup-script.sh
RUN apt update && \
	apt install nodejs npm -y && \
	rm -rf /var/lib/apt/lists/*

RUN cd /frontend/ && \
	npm i && \
	npm run build && \
	rm -rf /usr/local/apache2/htdocs/* && \
	cp -R /frontend/dist/* /usr/local/apache2/htdocs/

RUN cd /backend/ && \
	npm i && \
	chmod a+rx /docker-startup-script.sh

CMD ["/docker-startup-script.sh"]


