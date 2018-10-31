<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Light Component</div>
                    <div class="card-body">
                        My First Name : {{ first }}  <br/>
                        MY Last Name : {{ last }}  <br>
                        This is one : {{ one }} and {{ two }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props: ["one", "two"],

    data: function() {
        return {
            first: "Chris",
            last: "Bondzie"
        };
    },

    computed: {
        display: function() {
            return "The name is" + this.first + " " + this.last;
        }
    }

};
</script>

