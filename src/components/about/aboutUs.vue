<template>
  <div id="about-us" class="page-container">
    <div class="w-full h-full bg-primaryColor flex justify-between">
      <div>
        <sectionComponent>
          <template v-slot:title>
            ما هو مشروع
            <span class="text-secondaryColor font-bold"> فُرصة؟</span>
          </template>
          <template v-slot:paragraph>
            مرحبًا بكم في منصة الوظائف الخاصة بنا! لقد قمنا بتطوير منصة شاملة
            وسهلة الاستخدام تهدف إلى ربط الباحثين عن عمل وأصحاب العمل في مركز
            واحد. توفر منصتنا مجموعة واسعة من الميزات لتلبية احتياجات الباحثين
            عن عمل وأصحاب العمل على حد سواء.
          </template>
        </sectionComponent>
        <div class="mt-12">
          <sectionComponent>
            <template v-slot:title> هدفنا؟ </template>
            <template v-slot:paragraph>
              هدفنا هو أن نكون الوجهة المفضلة للباحثين عن عمل وأصحاب العمل ،
              وتزويدهم بمنصة سلسة وفعالة للتواصل وتلبية احتياجاتهم. نحن نهدف إلى
              إنشاء مجتمع مزدهر حيث يمكن للأفراد العثور على فرص عمل مفيدة، ويمكن
              للشركات اكتشاف أفضل المواهب،
            </template>
          </sectionComponent>
        </div>
      </div>
      <div class="mt-8">
        <img class="image" src="../../assets/photos/bro2.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  height: 100vh;
}

.image {
  width: 700px;
}
</style>

<script setup>
import sectionComponent from "./sectionComponent.vue";
</script>
