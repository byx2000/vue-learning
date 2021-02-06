<template>
    <div>
        <h2>用户</h2>
        <p>{{$route.query.message}}: {{$route.query.username}}</p>
    </div>
</template>

<script>
export default {
    name: 'Profile'
}
</script>