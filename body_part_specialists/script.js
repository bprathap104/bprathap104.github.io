const specialists = [
    {
        name: "Allergists/Immunologists",
        description: "They treat immune system disorders such as asthma, eczema, food allergies, insect sting allergies, and some autoimmune diseases.",
        bodyPart: "Immune system"
    },
    {
        name: "Anesthesiologists",
        description: "These doctors give you drugs to numb your pain or to put you under during surgery, childbirth, or other procedures. They monitor your vital signs while you're under anesthesia.",
        bodyPart: "Nervous system"
    },
    {
        name: "Cardiologists",
        description: "They're experts on the heart and blood vessels. You might see them for heart failure, a heart attack, high blood pressure, or an irregular heartbeat.",
        bodyPart: "Heart"
    },
    {
        name: "Colon and Rectal Surgeons",
        description: "You would see these doctors for problems with your small intestine, colon, and bottom. They can treat colon cancer, hemorrhoids, and inflammatory bowel disease.",
        bodyPart: "Colon"
    },
    {
        name: "Critical Care Medicine Specialists",
        description: "They care for people who are critically ill or injured, often heading intensive care units in hospitals. You might see them if your heart or other organs are failing or if you've been in an accident.",
        bodyPart: "Multiple"
    },
    {
        name: "Dermatologists",
        description: "Have problems with your skin, hair, nails? Do you have moles, scars, acne, or skin allergies? Dermatologists can help.",
        bodyPart: "Skin"
    },
    {
        name: "Endocrinologists",
        description: "These are experts on hormones and metabolism. They can treat conditions like diabetes, thyroid problems, infertility, and calcium and bone disorders.",
        bodyPart: "Glands"
    },
    {
        name: "Emergency Medicine Specialists",
        description: "These doctors make life-or-death decisions for sick and injured people, usually in an emergency room. Their job is to save lives and to avoid or lower the chances of disability.",
        bodyPart: "Multiple"
    },
    {
        name: "Family Physicians",
        description: "They care for the whole family, including children, adults, and the elderly. They do routine checkups and screening tests, give you flu and immunization shots, and manage diabetes and other ongoing medical conditions.",
        bodyPart: "Multiple"
    },
    {
        name: "Gastroenterologists",
        description: "They're specialists in digestive organs, including the stomach, bowels, pancreas, liver, and gallbladder. You might see them for abdominal pain, ulcers, diarrhea, jaundice, or cancers in your digestive organs. They also do a colonoscopy and other tests for colon cancer.",
        bodyPart: "Digestive system"
    },
    {
        name: "Geriatric Medicine Specialists",
        description: "These doctors care for the elderly. They can treat people in their homes, doctors' offices, nursing homes, assisted-living centers, and hospitals.",
        bodyPart: "Multiple"
    },
    {
        name: "Hematologists",
        description: "These are specialists in diseases of the blood, spleen, and lymph glands, like sickle cell disease, anemia, hemophilia, and leukemia.",
        bodyPart: "Blood"
    },
    {
        name: "Hospice and Palliative Medicine Specialists",
        description: "They work with people who are nearing death. They're experts in pain management. They work with a team of other doctors to keep up your quality of life.",
        bodyPart: "Multiple"
    },
    {
        name: "Infectious Disease Specialists",
        description: "They diagnose and treat infections in any part of your body, like fevers, Lyme disease, pneumonia, tuberculosis, and HIV and AIDS. Some of them specialize in preventive medicine or travel medicine.",
        bodyPart: "Multiple"
    },
    {
        name: "Internists",
        description: "These primary-care doctors treat both common and complex illnesses, usually only in adults. You'll likely visit them or your family doctor first for any condition. Internists often have advanced training in a host of subspecialties, like heart disease, cancer, or adolescent or sleep medicine.",
        bodyPart: "Multiple"
    },
    {
        name: "Medical Geneticists",
        description: "They diagnose and treat hereditary disorders passed down from parents to children. These doctors may also offer genetic counseling and screening tests.",
        bodyPart: "Genes"
    },
    {
        name: "Nephrologists",
        description: "They treat kidney diseases as well as high blood pressure and fluid and mineral imbalances linked to kidney disease.",
        bodyPart: "Kidneys"
    },
    {
        name: "Neurologists",
        description: "These are specialists in the nervous system, which includes the brain, spinal cord, and nerves. They treat strokes, brain and spinal tumors, epilepsy, Parkinson's disease, and Alzheimer's disease.",
        bodyPart: "Brain"
    },
    {
        name: "Obstetricians and Gynecologists",
        description: "Often called OB/GYNs, these doctors focus on women's health, including pregnancy and childbirth. They do Pap smears, pelvic exams, and pregnancy checkups. OB/GYNs are trained in both areas. But some of them may focus on women's reproductive health (gynecologists), and others specialize in caring for pregnant women (obstetricians).",
        bodyPart: "Reproductive system"
    },
    {
        name: "Oncologists",
        description: "These internists are cancer specialists. They do chemotherapy treatments and often work with radiation oncologists and surgeons to care for someone with cancer.",
        bodyPart: "Multiple"
    },
    {
        name: "Ophthalmologists",
        description: "You call them eye doctors. They can prescribe glasses or contact lenses and diagnose and treat diseases like glaucoma. Unlike optometrists, they're medical doctors who can treat every kind of eye condition as well as operate on the eyes.",
        bodyPart: "Eyes"
    },
    {
        name: "Osteopaths",
        description: "Doctors of osteopathic medicine (DO) are fully licensed medical doctors just like MDs. Their training stresses a \"whole body\" approach. Osteopaths use the latest medical technology but also the body's natural ability to heal itself.",
        bodyPart: "Multiple"
    },
    {
        name: "Otolaryngologists",
        description: "They treat diseases in the ears, nose, throat, sinuses, head, neck, and respiratory system. They also can do reconstructive and plastic surgery on your head and neck.",
        bodyPart: "ENT"
    },
    {
        name: "Pathologists",
        description: "These lab doctors identify the causes of diseases by examining body tissues and fluids under microscopes.",
        bodyPart: "Multiple"
    },
    {
        name: "Pediatricians",
        description: "They care for children from birth to young adulthood. Some pediatricians specialize in pre-teens and teens, child abuse, or children's developmental issues.",
        bodyPart: "Multiple"
    },
    {
        name: "Physiatrists",
        description: "These specialists in physical medicine and rehabilitation treat neck or back pain and sports or spinal cord injuries as well as other disabilities caused by accidents or diseases.",
        bodyPart: "Musculoskeletal"
    },
    {
        name: "Plastic Surgeons",
        description: "You might call them cosmetic surgeons. They rebuild or repair your skin, face, hands, breasts, or body. That can happen after an injury or disease or for cosmetic reasons.",
        bodyPart: "Skin"
    },
    {
        name: "Podiatrists",
        description: "They care for problems in your ankles and feet. That can include injuries from accidents or sports or from ongoing health conditions like diabetes. Some podiatrists have advanced training in other subspecialties of the foot.",
        bodyPart: "Feet"
    },
    {
        name: "Preventive Medicine Specialists",
        description: "They focus on keeping you well. They may work in public health or at hospitals. Some focus on treating people with addictions, illnesses from exposure to drugs, chemicals, and poisons, and other areas.",
        bodyPart: "Multiple"
    },
    {
        name: "Psychiatrists",
        description: "These doctors work with people with mental, emotional, or addictive disorders. They can diagnose and treat depression, schizophrenia, substance abuse, anxiety disorders, and sexual and gender identity issues. Some psychiatrists focus on children, adolescents, or the elderly.",
        bodyPart: "Brain"
    },
    {
        name: "Pulmonologists",
        description: "You would see these specialists for problems like lung cancer, pneumonia, asthma, emphysema, and trouble sleeping caused by breathing issues.",
        bodyPart: "Lungs"
    },
    {
        name: "Radiologists",
        description: "They use X-rays, ultrasound, and other imaging tests to diagnose diseases. They can also specialize in radiation oncology to treat conditions like cancer.",
        bodyPart: "Multiple"
    },
    {
        name: "Rheumatologists",
        description: "They specialize in arthritis and other diseases in your joints, muscles, bones, and tendons. You might see them for your osteoporosis (weak bones), back pain, gout, tendinitis from sports or repetitive injuries, and fibromyalgia.",
        bodyPart: "Joints"
    },
    {
        name: "Sleep Medicine Specialists",
        description: "They find and treat causes behind your poor sleep. They may have sleep labs or give you take-home tests to chart your sleep-wake patterns.",
        bodyPart: "Brain"
    },
    {
        name: "Sports Medicine Specialists",
        description: "These doctors diagnose, treat, and prevent injuries related to sports and exercise.",
        bodyPart: "Musculoskeletal"
    },
    {
        name: "General Surgeons",
        description: "These doctors can operate on all parts of your body. They can take out tumors, appendices, or gallbladders and repair hernias. Many surgeons have subspecialties, like cancer, hand, or vascular surgery.",
        bodyPart: "Multiple"
    },
    {
        name: "Urologists",
        description: "These are surgeons who care for men and women for problems in the urinary tract, like a leaky bladder. They also treat male infertility and do prostate exams.",
        bodyPart: "Urinary system"
    }
];

function populateTable() {
    const tableBody = document.querySelector("#specialistsTable tbody");
    
    specialists.forEach(specialist => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td data-label="Specialist">${specialist.name}</td>
            <td data-label="Body Part">${specialist.bodyPart}</td>
            <td data-label="Description">${specialist.description}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", populateTable);
