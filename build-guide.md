
# Gatsby and Netlify Build Guide

## Download starter code

Goto Starter Code Github Site https://github.com/joeattardi/coffee-shopstarter  

Click [Use this template] Button  

Click [Create repository from template]  

Repository will be Created on my Github as coffee-shop  

At my repository chomskim/coffee-shop  

Download or clone from https://github.com/chomskim/coffee-shop  


## Gatsby Build 

```sh
$ mkdir coffee-shop  
$ cd coffee-shop  
$ npm  install
[$ gatsby clean]
$ gatsby develop --host 0.0.0.0
...
You can now view gatsby-coffee-shop in the browser.
⠀
  Local:            http://localhost:8000/
  On Your Network:  http://192.168.70.49:8000/

View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  Local:            http://localhost:8000/___graphql
  On Your Network:  http://192.168.70.49:8000/___graphql

```

## Deploy on Netlify

Signup https://netlify.com Using Github auth

Create a new site -- Click [**Github**]

Select **Only Select repositories**

Click [**Install**]

To Pick Repository -- Click [**Github**]

Select chomskim/coffee-shop

Deploy  

Site details  

Change name  


`$ npm install netlify-cms-app@2.12.15 gatsby-plugin-netlify-cms@4.3.5`

## Config for Netlify

Add config.yml to static/admin

[On Netlify Console](https://app.netlify.com/sites/chomskim-coffee-shop/settings/general)

Identity --> Click [**Enable Identity**]

Service --> Click [**Enable Git Gateway**]

Identity Registration --> Click [**Edit**] --> Select **Open**


Site details  

Change name  


$ npm install netlify-cms-app@2.12.15 gatsby-plugin-netlify-cms@4.3.5


## Registering and logging in

https://chomskim-coffee-shop.netlify.app/admin

**Sign up**/Log in


## Add Gatsby plugin

$ npm install gatsby-source-filesystem@2.3.14

$ npm install gatsby-transformer-remark@2.8.19


## Error loading the CMS configuration
<pre>
Config Errors:
config should have required property 'media_folder'
config should have required property 'media_library'
config should match some schema in anyOf
config should have required property 'backend'
config should have required property 'collections'
Check your config.yml file.
</pre>

To solve the problem

```sh
$ echo 'application/x-yaml yaml yml' | sudo tee -a /etc/mime.types
$ cat /etc/mime.types | grep yml
application/x-yaml yaml yml
```

### Problem Solved By Correcting config.yml. But, still I don\'t know what\'s wrong

Mybe tailing blank



