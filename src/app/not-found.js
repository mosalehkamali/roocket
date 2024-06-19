import styles from "@/styles/404.module.css";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className={styles.contents}>
        <Image width={500} height={500} src="/assets/404-error.svg" alt="404-image"></Image>
      </div>
      <div className={styles.texts}>
        <p>صفحه مورد نظر یافت نشد :((</p>
        <Link href="/">برگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
};

export default page;
