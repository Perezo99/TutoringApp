<template>
    <div>
        <section>
            <base-card>
            <h2>Register As A Tutor now!</h2>
            <CoachForm @save-data="saveData"></CoachForm>
            </base-card>
        </section>
    </div>
</template>

<script>
import CoachForm from '../../component/layout/coaches/CoachForm'
export default {
     components: {
         CoachForm
     }, 
     methods: {
         saveData(data){
             this.$store.dispatch('coaches/registerCoach', data);
             this.$router.replace('/coaches');
         }
     }
}
</script>

