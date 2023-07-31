<template>
  <div ref="elementHTML" class="container">
    <table class="iksweb">
      <tbody>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
      </tbody>
    </table>
    <button class="p-2 bg-blue-200 mt-4 rounded-md border-1" id="getPdf" @click="generatePDF()">Download Pdf</button>
  </div>
</template>

<script setup>
// yarn add jspdf o'rnatish 
import jsPDF from 'jspdf';

const elementHTML = ref(null);

const generatePDF = () => {
  const doc = new jsPDF();
  const element = elementHTML.value;
  if (!element) {
    return;
  }
  doc.html(element, {
    callback: function (doc) {
      doc.save('sample-document.pdf');
    },
    x: 15,
    y: 15,
    width: 170,
    windowWidth: 650
  });
};

</script>

<style>
table.iksweb {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  height: auto;
}

table.iksweb,
table.iksweb td,
table.iksweb th {
  border: 1px solid #595959;
}

table.iksweb td,
table.iksweb th {
  padding: 3px;
  width: 30px;
  height: 35px;
}

table.iksweb th {
  background: #347c99;
  color: #fff;
  font-weight: normal;
}
</style>