function showParagraphP(P,event)
{
  event.preventDefault();
  let P_On = document.querySelector(P)
 if(P_On.style.display==='none') 
 P_On.style.display = 'block';
 else
 P_On.style.display = 'none';
 
}

window.onload = function() {
  if (localStorage.getItem("reviews")) {
    document.querySelector('.reviews_container').innerHTML = localStorage.getItem("reviews");
    addDeleteListenerToReviews();
  }
}

function addReview() {
  const input1Value = document.querySelector('.input1').value;
  const input2Value = document.querySelector('.input2').value;
  const resultDiv = document.querySelector('.reviews_container');
  if (!input1Value.trim() || !input2Value.trim()||!input1Value.trim()&&input2Value.trim()) {
    alert("Заполните оба поля комментария");
    return;
  }
  const newReview = document.createElement('div');
  newReview.className = 'review';
  const reviewText = document.createElement('p');
  reviewText.textContent = input1Value + ': ' + input2Value;
  reviewText.style.color = 'white';

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '✘';
  deleteButton.className = 'delete_button';
  deleteButton.style.fontSize = '30px';
  deleteButton.onclick = function() {
    resultDiv.removeChild(newReview);
    localStorage.setItem("reviews", resultDiv.innerHTML);
  }

  newReview.appendChild(reviewText);
  newReview.appendChild(deleteButton);
  resultDiv.appendChild(newReview);

  // After adding a review, we update the localStorage
  localStorage.setItem("reviews", resultDiv.innerHTML);
  addDeleteListenerToReviews();
}

function addDeleteListenerToReviews() {
  const deleteButtons = document.querySelectorAll('.delete_button');
  deleteButtons.forEach(button => {
    button.onclick = function() {
      const review = button.parentNode;
      review.parentNode.removeChild(review);
      localStorage.setItem("reviews", document.querySelector('.reviews_container').innerHTML);
    }
  });
}