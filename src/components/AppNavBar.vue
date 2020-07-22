<template>    
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link to="/" class="navbar-brand">Bank App </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <router-link tag="li" to="/" class="nav-item">
                    <a class="nav-link">Home</a>
                </router-link>
                <router-link tag="li" to="/deposit" class="nav-item">
                    <a class="nav-link">Depositar</a>
                </router-link>
                <router-link tag="li" to="/withdraw" class="nav-item">
                    <a class="nav-link">Sacar</a>
                </router-link>
                <router-link tag="li" to="/balance" class="nav-item">
                    <a class="nav-link">Saldo</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>