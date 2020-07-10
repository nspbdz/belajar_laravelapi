<template>
 <div class="row">
	<div class="column">
		<div id="app">
			<ul>
				<li v-for="item in list" :key="item.id">
					{{ item.username }} <a :href="`mailto:${item.email}`">{{ item.email }}</a>
				</li>
			</ul>
		</div> <!-- /#app -->
	</div> <!-- /.column -->
</div> <!-- /.row -->
</template>

<!-- script js -->
<script>
// Init Foundation - using reveal/modal JS
$(document).foundation();

// Vue Axios Call
new Vue({
	el: '#app',
	data: {
		list: null
	},
	methods: {
		getUsers: function() {
			var vm = this;
			axios.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
				vm.list = response.data;
			}, function(error) {
				console.log(error.statusText);
			});
		}
	},
	mounted: function() {
		this.getUsers();
	}
});
</script>

</template>

<!-- script js -->
<script>
export default {
  data() {
    return {
      // variable array yang akan menampung hasil fetch dari api
      persons: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      // fetch data dari api menggunakan axios
      axios.get("http://127.0.0.1:8000/api/v1/meeting").then(response => {
        // mengirim data hasil fetch ke varibale array persons
        this.persons = response.data;
      });
    },
    deleteData(id) {
      // delete data
      axios.delete("http://127.0.0.1:8000/api/v1/meeting/" + id).then(response => {
        this.loadData();
      });
    }
  }
};
</script>
