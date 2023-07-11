# from nodejs image
FROM node:latest
LABEL maintainer="sunny<tufp@yonyousj.com>"

# set workdir
WORKDIR /app

# install pm2
RUN npm install pm2 -g

# copy entrypoint.sh to /
COPY entrypoint.sh /entrypoint.sh

# change mode of entrypoint.sh
RUN chmod +x /entrypoint.sh

# run entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

# expose port
EXPOSE 3100
