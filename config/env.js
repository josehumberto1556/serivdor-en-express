//import dotenv from 'dotenv'
//import get  from 'env-var'

//env.config();
require('dotenv').config()
const {get}=require('env-var')


 const envs={
	
	PORT:get('PORT').required().asPortNumber(),
	PUBLIC_PATH:get('PUBLIC_PATH').default('public').asString()
}

module.exports={
	envs
}