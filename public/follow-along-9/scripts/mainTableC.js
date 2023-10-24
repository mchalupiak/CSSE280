document.addEventListener('DOMContentLoaded', () => {
  const fetchDataButton = document.getElementById("fetchDataButton");
  const dataTableHead = document.querySelector("#dataTable thead tr");
  const dataTableBody = document.querySelector("#dataTable tbody tr");

  fetchDataButton.addEventListener("click", function() {
      fetch(`https://api.chucknorris.io/jokes/random`)
        .then(response => response.json())
        .then(data => {
          dataTableHead.innerHTML = "";
          dataTableBody.innerHTML = "";
          for (const key in data) {
            dataTableHead.insertAdjacentHTML("beforeend", `<th>${key}</th>`);
            dataTableBody.insertAdjacentHTML("beforeend", `<td>${data[key]}</td>`);
          }
          $("#dataIndexModal").modal('hide');
        })
        .catch(error => {
          console.error("Error fetching data: ", error);
          dataTableBody.innerHTML = "<td colspan=\"2\">Error fetching data. Please try again</td>";
        })
        .finally(() => {
          $("#dataIndexModal").modal('hide');
          $('body').removeClass('modal-open');
          $('.modal-backdrop').remove();
        });
  });
});
