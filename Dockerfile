#base image
FROM node:12-alpine as react-build

# set working directory
WORKDIR /my-app

#add /app/node_modules/.bin to $PATH
ENV PATH /my-app/node_modules/.bin:$PATH

#install and cache app dependencies 
COPY package.json /my-app/package.json
RUN yarn install
#copy everything into app directory
COPY . ./

RUN yarn build

#stage:2 - Production environment build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY /build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]