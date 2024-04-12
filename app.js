const {envs}=require('./config/env')
const {starServer}=require('./server')

const main=()=>{
	starServer({
		
		port:envs.PORT,
		public_path:envs.PUBLIC_PATH
	})
	
	
}

(async()=>{
	main()
})()

