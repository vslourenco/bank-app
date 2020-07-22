<template>    
    <div class="form-group col-md-3">
        <label for="account_id">Conta Bancária:</label>
        <select class="form-control" id="account_id">
            <option>Selecione uma conta</option>
            <option
                v-for="account in accounts "
                :key="account.id"
                v-bind:value="account.id">
                {{ `Ag. ${account.agency} - CC ${account.number}` }}
            </option>
        </select>
    </div>
</template>

<script>
import axios from 'axios'
import config from '../config/config'

export default {
    data() {
        return {
            accounts: []
        }
    },
    created() {
        axios.get(`${config.apiURL}/accounts`)
            .then((response) => {
                this.accounts = response.data
            })
            .catch((error) => {
                console.log(error);
            })
    },
}
</script>