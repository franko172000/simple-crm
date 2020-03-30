<template>
    <div>
        <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
           
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">
                    <projects-table title="Employee List"></projects-table>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import Vue from 'vue'
  import ProjectsTable from './Tables/ProjectsTable'
  export default {
    components:{
        ProjectsTable
      },
    data() {
      return {
        
      }
    },
    methods: {
      onCopy() {
        this.$notify({
          type: 'success',
          title: 'Copied to clipboard'
        })
      }
    }
  };
</script>
<style></style>
