console.log("Script loaded ✅");

import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

console.log("Script loaded ✅");

// ⭐ LOAD REVIEWS FUNCTION
async function loadReviews() {
  const querySnapshot = await getDocs(collection(db, "reviews"));
  const reviewList = document.getElementById("reviewList");

  reviewList.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const data = doc.data();

    reviewList.innerHTML += `
      <div class="review-item">
        <strong>${data.name}</strong>
        <p>${"⭐".repeat(data.rating)}</p>
        <p>${data.text}</p>
      </div>
    `;
  });
}

// ⭐ GLOBAL FUNCTION (button click)
window.submitReview = async function () {

  console.log("Button clicked ✅");

  const name = document.getElementById("reviewName").value;
  const text = document.getElementById("reviewText").value;

  if (name === "" || text === "" || window.rating === 0) {
    alert("Please fill all fields and select rating");
    return;
  }

  try {
    await addDoc(collection(db, "reviews"), {
      name: name,
      text: text,
      rating: window.rating,
      timestamp: new Date()
    });

    alert("Review added successfully!");

    // ✅ refresh reviews instantly
    await loadReviews();

    // ✅ reset fields
    document.getElementById("reviewName").value = "";
    document.getElementById("reviewText").value = "";
    window.rating = 0;

    document.querySelectorAll("#starRating i")
      .forEach(s => s.classList.remove("active"));

  } catch (error) {
    console.error("Firestore Error ❌:", error);
  }
};

// ✅ LOAD REVIEWS ON PAGE LOAD
loadReviews();