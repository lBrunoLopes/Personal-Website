import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoGit } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io";

const Skills = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 mt-8">
            <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <SkillLink href="https://www.javascript.com/" title="Javascript">
                    <IoLogoJavascript className="w-20 h-20 mx-auto" />
                </SkillLink>

                <SkillLink href="https://www.w3schools.com/html/" title="HTML">
                    <FaHtml5 className="w-20 h-20 mx-auto" />
                </SkillLink>

                <SkillLink href="https://www.w3schools.com/css/" title="CSS">
                    <SiCss3 className="w-20 h-20 mx-auto" />
                </SkillLink>

                <SkillLink href="https://www.php.net/" title="PHP">
                    <FaPhp className="w-20 h-20 mx-auto" />
                </SkillLink>

                <SkillLink href="https://www.mysql.com/" title="MYSQL">
                    <SiMysql className="w-20 h-20 mx-auto" />
                </SkillLink>

                <SkillLink href="https://www.sqlite.org/" title="SQLITE">
                    <SiSqlite className="w-20 h-20 mx-auto" />
                </SkillLink>

                <SkillLink href="https://jquery.com/" title="JQUERY">
                    <DiJqueryLogo className="w-20 h-20 mx-auto" />
                </SkillLink>

                <SkillLink href="https://laravel.com/" title="LARAVEL">
                    <FaLaravel className="w-20 h-20 mx-auto" />
                </SkillLink>

                <SkillLink href="https://react.dev/" title="REACT">
                    <FaReact className="w-20 h-20 mx-auto" />
                </SkillLink>

                <SkillLink href="https://tailwindcss.com/" title="TAILWIND">
                    <RiTailwindCssFill className="w-20 h-20 mx-auto" />
                </SkillLink>

                <SkillLink href="https://git-scm.com/" title="GIT">
                    <BiLogoGit className="w-20 h-20 mx-auto" />
                </SkillLink>

                <SkillLink href="https://github.com/" title="GITHUB">
                    <IoLogoGithub className="w-20 h-20 mx-auto" />
                </SkillLink>
            </div>
        </div>
    );
};

const SkillLink = ({ href, title, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gray-100 rounded-lg text-center shadow-md hover:shadow-lg transition duration-300"
        title={title}
        style={{ width: "100%", padding: "1rem", margin: "0.5rem" }} // Adjust padding and margin
    >
        {children}
        <p className="mt-1 text-sm md:text-lg font-medium">{title}</p>
    </a>
);

export default Skills;
