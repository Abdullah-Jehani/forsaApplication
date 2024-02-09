<template>
  <div class="h-16 flex justify-evenly items-center bg-primaryColor">
    <h2 class="font-semiBold text-lg tracking-wider text-white">
      إكتشف عالم الفرص
    </h2>
    <div class="w-7/12 rounded border-0 p-3 relative"></div>
  </div>
  <div class="p-10">
    <div
      class="w-full h-full border border-solid rounded-lg border-grayBorder pt-10 pb-16"
    >
      <div class="flex flex-col justify-center items-center gap-3 relative">
        <bottom
          class="absolute left-16 top-5 flex justify-center items-center gap-2"
        >
          <p class="text-lg">حفظ</p>
          <box-icon
            class="cursor-pointer"
            name="bookmark"
            color="#0e2f56"
            size="md"
          ></box-icon>
        </bottom>

        <p class="absolute right-16 top-5 font-bold">
          تاريخ النشر: <span class="font-semibold">2024/2/2</span>
        </p>
        <img :src="'/src/assets/photos/companyLogo.png'" class="w-12" />
        <p class="font-bold text-lg">مجال</p>
        <div class="relative">
          <input
            dir="rtl"
            type="tel"
            name="phone"
            placeholder="09XXXXXXX"
            class="h-16 w-[600px] border border-solid rounded-lg border-sky-600 pr-3"
          />
          <button
            type="submit"
            class="text-sky-600 font-bold px-4 py-2 text-sm absolute left-5 top-[23%] border border-solid rounded-lg border-sky-600"
          >
            إتصل بنا
          </button>
        </div>
      </div>
      <div dir="rtl" class="flex flex-col gap-10 pr-20 pl-40 mt-10">
        <p class="font-bold">
          المسمى الوظيفي:<span class="font-semibold"> مصمم UI/UX</span>
        </p>
        <p class="font-bold">الشركة: <span class="font-semibold">مجال</span></p>
        <p class="font-bold">
          الموقع: <span class="font-semibold">طرابلس, ليبيا</span>
        </p>
        <p class="font-bold">
          نوع الوظيفة: <span class="font-semibold">دوام كامل</span>
        </p>
        <p class="font-bold pl-40">
          وصف الوظيفة:
          <span class="font-semibold">
            <br />نحن نبحث عن مصمم UI/UX موهوب وذو خبرة للانضمام إلى فريقنا
            الديناميكي في [Majal Company]. باعتبارك مصمم UI/UX، ستلعب دورًا
            حاسمًا في تصميم وتعزيز تجربة المستخدم لمنصة العمل لدينا. ستعمل بشكل
            وثيق مع مديري المنتجات والمطورين وأصحاب المصلحة الآخرين لإنشاء
            واجهات مستخدم بديهية وجذابة بصريًا تلبي احتياجات مستخدمينا.</span
          >
        </p>
      </div>
      <div class="flex justify-center items-center mt-20">
        <div  class="font-bold bg-primaryColor text-white hover:bg-primaryHover transition duration-300 px-10 py-3 rounded-lg">
            <router-link to="/jobs/job/apply">قدم الآن</router-link>
      
         </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
