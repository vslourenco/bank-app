<template>
	<div id="app">
        <app-nav-bar></app-nav-bar>
        <br/>
		<div class="container">
            <div :class="messageClass" class="alert alert-primary" role="alert" v-if="showMessage">
                {{ messageText }}
            </div>
			<router-view @displayMessage="displayMessage"></router-view>
		</div>

	</div>
</template>

<script>

export default {
    name: 'App',    
    data() {
        return {
            showMessage: false,
            messageText: '',
            messageClass: '',
        }
    },
    methods:{
        displayMessage(message){
            this.showMessage = true
            this.messageText = message.msg
            if(message.error){
                this.messageClass = 'alert alert-danger'
            }else{
                this.messageClass = 'alert alert-success'                
            }
        }
    },
    watch: {
    '$route'() {
        this.showMessage=false
    }
},
}
</script>
