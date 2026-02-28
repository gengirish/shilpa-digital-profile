export const personalInfo = {
  name: "Shilpa Girish Hiremath",
  title: "Senior DevOps Engineer",
  tagline: "4+ Years of Expert Cloud Architecture and CI/CD Automation",
  summary: "Senior DevOps Engineer with over 4 years of experience specializing in AWS Cloud and DevOps practices. Expertise in designing, implementing, and maintaining CI/CD pipelines and cloud infrastructure, with a strong focus on optimizing performance, security, and scalability.",
  aiSummary: "Shilpa is a Senior DevOps Engineer with 4+ years of AWS and CI/CD experience. She focuses on infrastructure-as-code, automation, containerization, and scalable cloud solutions.",
  currentPursuit: undefined,
  location: "India",
  linkedin: "https://www.linkedin.com/in/shilpa-girish-hiremath-4b935919b/",
  github: "https://github.com",
  email: "shilpagirish616@gmail.com",
};

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "10+", label: "AWS Services Mastered" },
  { value: "3", label: "Roles as DevOps Engineer" },
  { value: "100%", label: "Automation Focus" },
];

export const skillCategories = [
  {
    name: "Cloud Computing",
    icon: "☁️",
    color: "#00d4ff",
    skills: ["AWS EC2", "AWS S3", "AWS RDS", "AWS Lambda", "AWS VPC", "CloudWatch", "Route 53", "IAM", "Azure Event Hub"],
  },
  {
    name: "Automation & CI/CD",
    icon: "⚡",
    color: "#7c3aed",
    skills: ["Terraform", "Ansible", "Jenkins", "Maven", "ANT", "Docker", "Git/GitHub", "Shell Scripting"],
  },
  {
    name: "Server & Security",
    icon: "🔒",
    color: "#34d399",
    skills: ["Linux Admin", "Windows Admin", "Networking", "Bastion Host", "Subnets", "Elastic IP", "Nagios"],
  },
];

export const experience = [
  {
    epoch: 2,
    phase: "Leadership",
    title: "Sr. DevOps Engineer",
    company: "Kartel Technosoft",
    companyType: "Tech Startup",
    period: "Nov 2023 – Present",
    domain: "Cloud Ops",
    domainColor: "#00d4ff",
    accuracy: 97,
    loss: 0.03,
    description: "Automating cloud infrastructure provisioning and managing robust CI/CD pipelines.",
    highlights: [
      "Automated infrastructure provisioning with Terraform, reducing manual deployment efforts.",
      "Implemented a Bastion Host and Custom IAM policies, enhancing security of critical systems.",
      "Optimized cloud costs by leveraging AWS Lambda serverless solutions.",
      "Orchestrated deployments across Development, Staging, and Production ensuring minimal downtime.",
    ],
    tech: ["AWS", "GitHub", "Jenkins", "Docker", "Terraform", "Ansible", "Linux"],
  },
  {
    epoch: 1,
    phase: "Growth",
    title: "Sr. DevOps Engineer",
    company: "Kartel Technosoft",
    companyType: "Tech Startup",
    period: "Jun 2022 – Oct 2023",
    domain: "Automation",
    domainColor: "#7c3aed",
    accuracy: 85,
    loss: 0.15,
    description: "Spearheaded application scalability and fully automated load balancing on AWS.",
    highlights: [
      "Provisioned, configured and managed Linux/Windows servers on AWS using EC2, EBS, RDS.",
      "Ensured robust database management and data availability on Amazon RDS and CloudWatch.",
      "Led continuous integration via Jenkins and Hudson, utilizing ANT and Maven.",
      "Optimized system configurations using Ansible, reducing manual intervention.",
    ],
    tech: ["AWS", "GitHub", "Jenkins", "Docker", "Terraform", "Ansible", "Linux", "Windows"],
  },
  {
    epoch: 0,
    phase: "Foundation",
    title: "DevOps Engineer",
    company: "Kartel Technosoft",
    companyType: "Tech Startup",
    period: "May 2021 – May 2022",
    domain: "Operations",
    domainColor: "#34d399",
    accuracy: 60,
    loss: 0.40,
    description: "Optimized AWS deployments and established primary CI/CD pipelines.",
    highlights: [
      "Optimized EC2 instances for improved performance and cost efficiency.",
      "Administered Git and Jenkins for reliable Continuous Integration.",
      "Developed monitoring and alerting capabilities to ensure operational stability.",
      "Created continuous delivery pipelines aligning with agile release strategies.",
    ],
    tech: ["AWS", "Jenkins", "Git", "Maven", "Linux"],
  },
];

export const featuredProjects = [
  {
    title: "Automated Cloud Provisioning",
    client: "Internal Infrastructure",
    domain: "Infrastructure as Code",
    domainColor: "#00d4ff",
    description: "Built fully automated AWS infrastructure deploying multi-AZ EC2, RDS, and scalable VPCs.",
    impact: "Reduced deployment time by 80% and minimized multi-AZ downtime.",
    tech: ["Terraform", "AWS", "VPC", "EC2"],
  },
  {
    title: "CI/CD Pipeline Enhancement",
    client: "Enterprise Release",
    domain: "CI/CD",
    domainColor: "#7c3aed",
    description: "Orchestrated end-to-end continuous integration pipelines for Jenkins, integrated with Git and Maven.",
    impact: "Ensured 99% reliable automated deployments on Tomcat application servers.",
    tech: ["Jenkins", "Maven", "Docker", "Git"],
  }
];

export const certifications = [
  {
    title: "B.Sc in Computer Science",
    issuer: "Rani Channamma University",
    date: "2020",
    description: "Foundation in computer science and software development.",
  }
];

export const testimonials = [];

export const domains = [
  { name: "Cloud Engineering", icon: "☁️" },
  { name: "CI/CD Orchestration", icon: "⚙️" },
  { name: "Infra Automation", icon: "🏗️" }
];

export const skillJourney = [
  {
    skill: "AWS Cloud",
    color: "#00d4ff",
    milestones: [
      { company: "Kartel-Ops", year: 2021, level: 50 },
      { company: "Kartel-Auto", year: 2022, level: 80 },
      { company: "Kartel-Lead", year: 2023, level: 95 }
    ]
  },
  {
    skill: "Terraform",
    color: "#7c3aed",
    milestones: [
      { company: "Kartel-Ops", year: 2021, level: 20 },
      { company: "Kartel-Auto", year: 2022, level: 75 },
      { company: "Kartel-Lead", year: 2023, level: 95 }
    ]
  },
  {
    skill: "Jenkins",
    color: "#34d399",
    milestones: [
      { company: "Kartel-Ops", year: 2021, level: 60 },
      { company: "Kartel-Auto", year: 2022, level: 85 },
      { company: "Kartel-Lead", year: 2023, level: 90 }
    ]
  }
];

export const graphNodes = [
  { id: "Kartel-Ops", domain: "Operations", color: "#34d399", years: "2021-2022", size: 2 },
  { id: "Kartel-Auto", domain: "Automation", color: "#7c3aed", years: "2022-2023", size: 3 },
  { id: "Kartel-Lead", domain: "Cloud Ops", color: "#00d4ff", years: "2023-Now", size: 4 },
];

export const projectConnections = [
  { from: "Kartel-Ops", to: "Kartel-Auto", sharedSkills: ["Jenkins", "AWS", "Git"], strength: 5 },
  { from: "Kartel-Auto", to: "Kartel-Lead", sharedSkills: ["Terraform", "Ansible", "Docker"], strength: 7 }
];
