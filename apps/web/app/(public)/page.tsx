// import Image, { type ImageProps } from "next/image";
// import styles from "./page.module.css";

// type Props = Omit<ImageProps, "src"> & {
//   srcLight: string;
//   srcDark: string;
// };

// const ThemeImage = (props: Props) => {
//   const { srcLight, srcDark, ...rest } = props;

//   return (
//     <>
//       <Image {...rest} src={srcLight} className="imgLight" />
//       <Image {...rest} src={srcDark} className="imgDark" />
//     </>
//   );
// };

export default function Home() {
  return (
    // <div className={styles.page}>
    //   <main className={styles.main}>

    <main className="flex-1 flex flex-col justify-center items-center pt-(--header-height)">
      {/* <ThemeImage
          className={styles.logo}
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        /> */}
      <div className="bg-honeydrew gap-3  flex flex-col justify-center items-center w-fit px-8 py-20 rounded-(--radius)">
        <h1>Startsidan</h1>
        <p>Här ska du få information och sätta igång med onboarding</p>
      </div>
    </main>
  );
}
