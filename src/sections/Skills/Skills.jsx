import styles from './Skills.module.css';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();  // Get the current theme
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
  <section id='skills' className={styles.container}>
    <h1 className='sectionTitle'>Skills</h1>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="JavaScript"/>
        <SkillList src={checkMarkIcon} skill="Node"/>
        <SkillList src={checkMarkIcon} skill="React"/>
    </div>
    <hr />
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C#"/>
        <SkillList src={checkMarkIcon} skill="Java"/>
        <SkillList src={checkMarkIcon} skill="Python"/>
        <SkillList src={checkMarkIcon} skill="MySQL"/>
        <SkillList src={checkMarkIcon} skill="MongoDB"/>
        <SkillList src={checkMarkIcon} skill="Firebase"/>

    </div>
    <hr />
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git"/>
        <SkillList src={checkMarkIcon} skill=".NET"/>
        <SkillList src={checkMarkIcon} skill="Android Studio"/>
        <SkillList src={checkMarkIcon} skill="Unity"/>
      
        <SkillList src={checkMarkIcon} skill="Agile development"/>
    </div>
    </section>
  );
}

export default Skills