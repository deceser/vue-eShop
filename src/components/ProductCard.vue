<template>
  <div class="card">
    <div class="image">
      <img src="../assets/image/test.jpeg" alt="product" srcset="" />
    </div>
    <div class="product-name">
      <h1>Iphome</h1>
    </div>
    <div class="product-description">
      <p>
        2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime
        HD Camera, Touch ID. Works with iPhone/iPad; Silver
      </p>
    </div>
    <div class="product-price">
      <h1>$1000</h1>
    </div>
    <router-link to="/product">
      <button class="product-btn">View More</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 0px 20px 24px;

  width: 332px;
  height: 416px;

  background: #ffffff;

  border: 1px solid #cccccc;
  border-radius: 24px;

  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 20px 35px rgba(0, 0, 0, 0.06);
    transform: translateY(-5px);
  }

  .image {
    cursor: pointer;
    align-items: center;
    img {
      object-fit: cover;
      height: 132px;
      width: 100%;
      padding: 10px;
    }
  }

  .product-name {
    h1 {
      cursor: pointer;

      font-weight: 700;
      font-size: 20px;
      color: #363636;
    }
  }

  .product-description {
    p {
      font-weight: 400;
      color: #828282;
      font-size: 15px;
    }
  }

  .product-price {
    h1 {
      font-weight: 700;
      font-size: 20px;
      color: #363636;
    }
  }

  .product-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;

    cursor: pointer;

    background: #18a661;

    border: 1px solid #18a661;
    border-radius: 38px;

    color: #ffffff;
    font-weight: 700;
    font-size: 16px;
    transition: ease-in-out 0.4s;

    &:hover {
      transition: ease-in-out 0.4s;
      opacity: 0.8;
    }
  }
}
</style>
