<template>
  <div class="h-16 flex justify-evenly items-center bg-primaryColor">
    <h2 class="font-semiBold text-lg tracking-wider text-white">
      إكتشف عالم الفرص
    </h2>
  </div>
  <div class="p-10">
    <div
      class="w-full h-full border border-solid rounded-lg border-grayBorder pt-10 pb-16"
    >
      <div class="flex justify-center items-center">
        <h1 class="text-3xl font-bold">نشر وظيفة</h1>
      </div>
      <div class="pr-11 mt-10">
        <form>
          <div>
            <label for="adress" class="block font-bold text-lg mb-2"
              >العنوان
            </label>

            <input
              type="text"
              id="adress"
              name="adress"
              minlength="10"
              maxlength=" 20"
              class="border-2 border-solid rounded-lg border-grayBorder py-1 px-2 w-[500px]"
            />
            <label for="description" class="block font-bold text-lg mb-2 mt-6"
              >الوصف
            </label>

            <textarea
              id="description"
              name="description"
              minlength="10"
              maxlength="120"
              class="border-2 border-solid rounded-lg border-grayBorder py-1 px-2 w-[500px]"
            >
            </textarea>
            <label for="location" class="block font-bold text-lg mb-2 mt-6"
              >الموقع
            </label>

            <select
              id="location"
              name="location"
              class="border-2 border-solid rounded-lg border-grayBorder px-2"
            >
              <option name="benghazi" value="benghazi">بنغازي</option>
              <option name="tripoli" value="tripoli">طرابلس</option>
              <option name="misrata" value="misrata">مصراتة</option>
              <option name="sabha" value="sabha">سبها</option>
            </select>
            <div class="flex gap-32">
              <div>
                <label for="job-type" class="block font-bold text-lg mb-2 mt-6"
                  >نوع الوظيفة
                </label>

                <select
                  id="job-type"
                  name="job-type"
                  class="border-2 border-solid rounded-lg border-grayBorder px-2"
                >
                  <option name="full-time" value="full-time">دوام كامل</option>
                  <option name="part-time" value="part-time">دوام جزئي</option>
                </select>
              </div>
              <div class="flex justify-center items-center gap-10">
                <div>
                  <h1 class="block font-bold text-lg mb-2 mt-6">نوع العمل:</h1>
                  <div>
                    <input
                      class="accent-primaryColor cursor-pointer"
                      type="checkbox"
                      id="reguler"
                      name="reguler"
                      value="reguler"
                    />
                    <label for="reguler">نظامية</label>
                  </div>
                  <div class="mt-1">
                    <input
                      class="accent-primaryColor cursor-pointer"
                      type="checkbox"
                      id="remote"
                      name="remote"
                      value="remote"
                    />
                    <label for="remote">عن بعد</label>
                  </div>
                </div>
                <div>
                  <h1 class="block font-bold text-lg mb-2 mt-6">الفترة:</h1>
                  <div>
                    <input
                      class="accent-primaryColor cursor-pointer"
                      type="checkbox"
                      id="morning"
                      name="morning"
                      value="morning"
                    />
                    <label for="morning">صباحية</label>
                  </div>
                  <div class="mt-1">
                    <input
                      class="accent-primaryColor cursor-pointer"
                      type="checkbox"
                      id="night"
                      name="night"
                      value="night"
                    />
                    <label for="night">مسائية</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <input
              class="accent-primaryColor cursor-pointer"
              type="checkbox"
              id="terms"
              name="terms"
              value="terms"
            />
            <label for="terms"
              >قد قرأت ووافقت على سياسة الخصوصية وشروط الخدمة.</label
            >
          </div>

          <div class="w-full flex justify-center items-center mt-5">
            <button
              type="submit"
              class="font-bold bg-primaryColor text-white hover:bg-primaryHover transition duration-300 px-20 py-3 rounded-lg"
            >
              نشر
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
textarea {
  resize: none;
}
</style>
<script setup></script>
