<template>
  <HomeLayout>

    <Header bg-color="var(--light-blue)" variation = "v2" colColor="var(--trans-blue)" border-color="var(--med-blue)" padding="8rem 4rem" bgImage="url('../../images/dall-e-2.png')">
      <template>Chris Clark<br />Loan Officer</template>
      <template #support>Lugging this fat cock uphill since 1986.</template>
      <template #context>
          <p class="copy"><strong>NMLS#</strong> 2383562</p>
          <p class="copy-small"><a href="tel:7704014199">770-401-4199</a></p>
          <p class="copy-small"><a href="mailto:CC@ybilending.com">CC@ybilending.com</a></p>
      </template>
    </Header>

    <GridRow>
      <GridItem>
        <template><img src="../../static/images/icons/low-rates.png"></template>
        <template #label><p class="copy-small">Rates as low as 3.74%</p></template>
      </GridItem>
      <GridItem>
        <template><img src="../../static/images/icons/credit.png" ></template>
        <template #label><p class="copy-small">Up to $5m in credit</p></template>
      </GridItem>
      <GridItem>
        <template><img src="../../static/images/icons/fast-process.png"></template>
        <template #label><p class="copy-small">Quick to close</p></template>
      </GridItem>
      <GridItem>
        <template><img src="../../static/images/icons/long-term.png"></template>
        <template #label><p class="copy-small">Long term loans available</p></template>
      </GridItem>

    </GridRow>
    
    <!-- <div class="tenhundo">
    <div class="grid">
          <p><p>NMLS#</p>2383562</p>
          <p><p>Phone Number</p><br /><a href="tel:7704014199">770-401-4199</a></p>
          <p><p>email</p><br /><a href="mailto:CC@ybilending.com">CC@ybilending.com</a></p>
        </div>
    </div> -->

    <div class="fourteenfour">
      <h2 class="align-left">For my Film Industry friends:</h2>
      <p class="align-left display">Please take a look below at these helpful links; they really helped with my home buying. </p>
      <ul class="copy align-left">     
        <li><a href="https://play.google.com/store/apps/details?id=com.thegrizzlylabs.geniusscan.free&hl=en_US&gl=US&pli=1">Genius Document Scanning Android</a ></li>
        <li><a href="https://dl.tglapp.com/genius-scan">Genius Document Scanning Apple</a></li>
        <li><a href="https://www.castandcrew.com/blog/employment-income-verification/">Cast and Crew Verification Of Employment link</a></li>
        <li>Entertainment Partners Verification Of Employment: <a href="tel:8185994449">818-955-4449</a>, <a href="mailto:uigroup@ep.com">uigroup@ep.com</a></li>
      </ul>
    </div>
    

    <div class="tenhundo">
      <div class="grid">
        <div class="item"><img src="../../static/images/dall-e-1.png" width="300" /></div>
        <div class="item"><img src="../../static/images/dall-e-3.png" width="300" /></div>
        <div class="item"><img src="../../static/images/dall-e-4.png" width="300" /></div>
      </div>
      Copyright 2023, Chris Clark, Loan Officer
    </div>
    
    </HomeLayout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Chris Clark, Loan Officer. Call me at 770-401-4199'
  }
}
</script>



<style scoped lang="scss">
// @import "../../assets/css/variables.scss";


h2 { 
  margin-top: 8rem; 
  margin-bottom: 0rem;
  font-size: 4rem;
}

h3 { 
  margin-bottom: 0rem;
  font-size: 2.8rem;
}


li {
  padding-left: 1.6rem;
  margin-left: -5.7rem;
  list-style-type: none;
}

.flex {
  display: flex; 
  flex-direction: row;
  justify-content: space-around;
  
}
.grid {
  display: grid;
  max-width: 100rem;
  row-gap: 0px;
  column-gap: 3px;
  margin-bottom: 12rem;
}




@media (min-width: 600px) {
 .grid { grid-template-columns: repeat(2, 1fr); }
}


@media (min-width: 900px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}


</style>