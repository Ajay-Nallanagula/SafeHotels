function calculateCartsTotal(list) {
  return list.reduce((acc, { price }) => {
    acc = acc + parseInt(price);
    return acc;
  }, 0);
}

$(document).ready(() => {
  $("#lnkCart").click((e) => {
    $("#divCart").slideToggle("", "", () => {
      const hide = $("body").css("overflow");
      const val = hide === "hidden" ? "visible" : "hidden";
      $("body").css("overflow", val);
    });
   $(".backdrop").fadeToggle();
  });

  $(".accept").click(() => $("#divCookies").hide());

  $("#btnCheckOut").click((e) => {
    e.preventDefault();
   $('#indexDiv').removeClass('backdrop')
   $("#divCart").slideUp()
   $('#divImgContainer').css('display','none')
    $("#tabContainer").html("");
    const htmlStr = $("#chkCart").html();
    $("#tabContainer").append(htmlStr);
  });

  //$('#divPaymentBill')
  // const cartItemsDummy =[{item:'Prod1',price:'60'},{item:'Prod1',price:'60'}]
  // cartItemsDummy.map(({ item, price }, index) => {
  //   const htmlStr = `<div class='row'>
  // <div class="column"><span style='font-size:100px;color: whitesmoke;'>&#9675;</span></div>
  //             <div class="column">${item}</div>
  //             <div class="column" style='text-align:right'>${price}</div>
  // <div>
  // `;

  //   $("#divCartItems1").append(htmlStr);
  //   const isLast = cartItemsList.length - 1 === index;
  //   if (isLast) {
  //     $(`<div class="rowLineLast"></div>`).appendTo("#divCartItems");
  //   }
  //   $(`<div class="rowLine"></div>`).appendTo("#divCartItems");
  // });

  // const totalStr = `<div class='row'>
  //   <div class="column">Total</div>
  //   <div class="column"></div>
  //   <div class="column" style='text-align:right'>${cartsTotal}</div>
  // <div>`;
  //     $("#divCartItems1").append(totalStr);
  //     $("#divCartItems1").appendTo('#divPaymentBill')

  //Click the cart
  $("#lnkCart").click((e) => {
    e.preventDefault();
    $("#divCartItems").html("");
    const cartsTotal = calculateCartsTotal(cartItemsList);
    //Add items to cart
    cartItemsList.map(({ item, price }, index) => {
      const htmlStr = `<div class='row'>
    <div class="column"><span style='font-size:100px;color: whitesmoke;'>&#9675;</span></div>
								<div class="column">${item}</div>
								<div class="column" style='text-align:right'>${price}</div>
    <div>
    `;

      $("#divCartItems").append(htmlStr);
      const isLast = cartItemsList.length - 1 === index;
      if (isLast) {
        $(`<div class="rowLineLast"></div>`).appendTo("#divCartItems");
      }
      $(`<div class="rowLine"></div>`).appendTo("#divCartItems");
    });

    const totalStr = `<div class='row'>
  <div class="column">Total</div>
  <div class="column"></div>
  <div class="column" style='text-align:right'>${cartsTotal}</div>
<div>`;
    $("#divCartItems").append(totalStr);
  });

  $("#lnkStore").click((e) => {
    e.preventDefault();
    //Todo create dynamic content here
    $("#tabContainer").html("");
    const htmlStr = `		<div class="grid-container">
    <div>
      <div class="module">
        <div class='divCartCont'>
          <button class="btnAddCart" data-name='some prod info1' data-price='101'><span style="font-size:11px"><b>Add to
                Cart</b></span></button>
        </div>
      </div>
      <div class='divProdInfoContainer'>
        <div class='divProdInfo'>
          some prod info1
        </div>
        <div class='divProdInfo'>
          101
        </div>
      </div>
    </div>

    <div>
      <div class="module">
        <div class='divCartCont'>
          <button class="btnAddCart" data-name='some prod info2' data-price='102'><span style="font-size:11px"><b>Add to
                Cart</b></span></button>
        </div>
      </div>
      <div class='divProdInfoContainer'>
        <div class='divProdInfo'>
          some prod 2
        </div>
        <div class='divProdInfo'>
          102
        </div>
      </div>
    </div>
    <div>
      <div class="module">
        <div class='divCartCont'>
          <button class="btnAddCart" data-name='some prod info3' data-price='103'><span style="font-size:11px"><b>Add to
                Cart</b></span></button>
        </div>
      </div>
      <div class='divProdInfoContainer'>
        <div class='divProdInfo'>
          some prod info 3
        </div>
        <div class='divProdInfo'>
          103
        </div>
      </div>
    </div>
    <div>
      <div class="module">
        <div class='divCartCont'>
          <button class="btnAddCart" data-name='some prod info4' data-price='104'><span style="font-size:11px"><b>Add to
                Cart</b></span></button>
        </div>
      </div>
      <div class='divProdInfoContainer'>
        <div class='divProdInfo'>
          some prod info4
        </div>
        <div class='divProdInfo'>
          104
        </div>
      </div>
    </div>
    <div>
      <div class="module">
        <div class='divCartCont'>
          <button class="btnAddCart" data-name='some prod info5' data-price='105'><span style="font-size:11px"><b>Add to
                Cart</b></span></button>
        </div>
      </div>
      <div class='divProdInfoContainer'>
        <div class='divProdInfo'>
          some prod info5
        </div>
        <div class='divProdInfo'>
          105
        </div>
      </div>
    </div>
    <div>
      <div class="module">
        <div class='divCartCont'>
          <button class="btnAddCart" data-name='some prod info6' data-price='106'><span style="font-size:11px"><b>Add to
                Cart</b></span></button>
        </div>
      </div>
      <div class='divProdInfoContainer'>
        <div class='divProdInfo'>
          some prod info6
        </div>
        <div class='divProdInfo'>
          106
        </div>
      </div>
    </div>


  </div>
    `;
    $("#tabContainer").append(htmlStr);
  });

  $(document).on("click", ".btnAddCart", function (e) {
    const price = $(e.currentTarget).attr("data-price");
    const item = $(e.currentTarget).attr("data-name");
    //cartItemsList = [...cartItemsList, { item, price }];
    cartItemsList.push({ item, price });
    if (cartItemsList.length) {
      $("#divCartCount").html(cartItemsList.length);
      $("#divCartCount").css("background", "black");
    }
  });
});
