window.AIB_DATA = window.AIB_DATA || {};
window.AIB_DATA.domains = window.AIB_DATA.domains || {};
window.AIB_DATA.exams = window.AIB_DATA.exams || [];

window.AIB_DATA.exams.push({
  "id": "exam3",
  "title": "Practice Exam 3",
  "durationMinutes": 130,
  "description": "Full-length 65-question paper; cross-domain scenarios where one company's story spans strategy, governance and scaling.",
  "questions": [
    {
      "id": "e3-01",
      "domain": 1,
      "skill": "1.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "Oakhaven Furniture, a mid-size retailer, is buying a product-recommendation engine. The vendor says: 'Our algorithm is trained on your two years of order history to produce a model, which then scores every shopper session in real time.' A board member asks the strategist to explain the distinction between the algorithm and the model. Which explanation is MOST accurate?",
      "options": [
        "The algorithm is the learning procedure applied to historical data; the model is the resulting artifact that encodes the learned patterns and is used for inference on new sessions",
        "The algorithm and the model are the same thing described at different stages of the sales cycle",
        "The model is the training data set, and the algorithm is the dashboard that displays recommendations",
        "The algorithm runs only in real time, while the model is a static report produced once at the end of the project"
      ],
      "answer": [0],
      "explanation": "Core AI vocabulary (skill 1.1.1): an algorithm is the learning method, training applies that method to historical data, the output is a model, and inference uses the model to make predictions on new inputs such as live shopper sessions. The claim that algorithm and model are synonyms blurs the process with its product, which matters when negotiating who owns the trained model. The model is not the data set and the algorithm is not a dashboard; those confuse inputs and presentation with learning. Reversing the roles so that the algorithm runs live and the model is a one-off report inverts how trained systems are actually deployed."
    },
    {
      "id": "e3-02",
      "domain": 2,
      "skill": "2.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "Oakhaven Furniture's top strategic objective is to cut the 18 percent return rate on sofas and wardrobes, which is driven mostly by items that do not fit the customer's room or do not match the colour they expected. Which AI capability maps MOST directly to that business outcome?",
      "options": [
        "A computer-vision room visualizer that lets shoppers place true-scale products in photos of their own rooms before ordering",
        "A generative AI tool that writes weekly marketing newsletters in the brand voice",
        "A demand-forecasting model that optimizes warehouse stock levels by region",
        "An AI meeting summarizer for the merchandising team's weekly reviews"
      ],
      "answer": [0],
      "explanation": "Skill 2.1.1 asks the strategist to map an AI capability to a specific business outcome. The stated root causes are fit and colour mismatch at the moment of purchase, so the capability that intervenes at that moment, visualizing true-scale products in the customer's room, addresses the return rate directly. Newsletter generation improves marketing productivity but does not change what customers see before ordering. Demand forecasting reduces stock-outs and overstock, a different objective. A meeting summarizer saves internal time and has no link to returns. The exam rewards tracing the capability to the stated outcome, not picking the most fashionable technology."
    },
    {
      "id": "e3-03",
      "domain": 3,
      "skill": "3.1.4",
      "type": "single",
      "difficulty": "medium",
      "question": "Oakhaven Furniture's customer assistant on Amazon Bedrock answers questions from a knowledge base of delivery, assembly and warranty documents. Customers have reported that it occasionally promises delivery windows and discounts that appear nowhere in the source documents. Oakhaven wants an automated safeguard that detects answers not supported by the retrieved material. Which Amazon Bedrock Guardrails capability is the MOST appropriate choice?",
      "options": [
        "Contextual grounding checks that flag or block responses that are not grounded in the retrieved source content",
        "Word filters that block a list of prohibited words such as competitor brand names",
        "Sensitive information filters that redact personal data such as phone numbers",
        "Denied topics that stop the assistant from discussing subjects such as politics"
      ],
      "answer": [0],
      "explanation": "Skill 3.1.4 covers hallucination detection and guardrails as safeguards. Contextual grounding checks in Amazon Bedrock Guardrails compare the response against the retrieved source and the user query and flag responses that are ungrounded or irrelevant, which is exactly the failure here: invented delivery windows and discounts. Word filters only match specified terms and cannot judge factual support. Sensitive information filters protect personal data and do nothing about fabricated promises. Denied topics keep the assistant away from whole subject areas but cannot tell a supported warranty answer from an unsupported one. The strategic lesson is to pick the safeguard that matches the specific failure mode."
    },
    {
      "id": "e3-04",
      "domain": 4,
      "skill": "4.2.3",
      "type": "single",
      "difficulty": "medium",
      "question": "Oakhaven Furniture wants real-time personalization across its website and 40 stores. Its point-of-sale and inventory systems are 15 years old, run on premises and export data once a night as flat files. There are no application programming interfaces (APIs). The data team is excellent and the budget is approved. Which foundational infrastructure requirement is the MOST critical to assess before committing to the initiative?",
      "options": [
        "Whether the systems can expose data through APIs or streaming integration so that models receive fresh data with the latency the use case needs",
        "Whether the stores have enough printers to produce personalized receipts",
        "Whether the company should switch its office productivity suite before starting",
        "Whether the data team should be renamed the AI team to signal commitment"
      ],
      "answer": [0],
      "explanation": "Skill 4.2.3 is about assessing foundational technology and infrastructure requirements. Real-time personalization needs data that is minutes old, not a nightly batch, so the gating question is integration and latency: can the legacy systems expose events through APIs, streaming or a modern data platform? Without that, even a perfect model would score yesterday's behaviour. Printers are peripheral hardware and unrelated to model inputs. The productivity suite has no bearing on data integration. Renaming a team is symbolic and does not change capability. The exam expects strategists to look past the model to the plumbing that feeds it."
    },
    {
      "id": "e3-05",
      "domain": 2,
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "medium",
      "question": "Oakhaven Furniture's assistant on Amazon Bedrock sends the same 6,000-token block of policies, tone guidance and catalogue rules with every customer request, followed by a short question. Finance notes that input tokens make up over 80 percent of the monthly bill. Which cost-optimization approach is MOST appropriate as a first step?",
      "options": [
        "Use prompt caching so that the repeated static prefix is cached and billed at a reduced rate on subsequent requests",
        "Move all customer conversations to batch inference so that they are processed overnight at a discount",
        "Purchase Provisioned Throughput for a dedicated model unit before measuring whether volume justifies it",
        "Remove all policy guidance from the prompt and accept lower answer quality"
      ],
      "answer": [0],
      "explanation": "Skill 2.2.5 covers basic cost controls for AI implementations. Amazon Bedrock prompt caching lets a repeated, unchanging prompt prefix be stored and reused, with cached input tokens priced well below the standard input rate, so it directly targets a bill dominated by identical context. Batch inference offers a roughly 50 percent discount but is for offline jobs where latency does not matter; live customer chats cannot wait overnight. Provisioned Throughput is a capacity commitment for steady high volume and should be evaluated after usage patterns are understood, not as a reflex. Deleting the guidance cuts tokens but sacrifices the quality the business depends on."
    },
    {
      "id": "e3-06",
      "domain": 3,
      "skill": "3.2.4",
      "type": "single",
      "difficulty": "easy",
      "question": "Oakhaven Furniture's governance committee uses a four-tier AI risk classification modeled on the EU AI Act (unacceptable, high, limited, minimal) to decide how much review each use case receives. Which of the following Oakhaven use cases would normally fall into the LOWEST risk tier and therefore need only lightweight review?",
      "options": [
        "A generative AI tool that drafts internal product descriptions that merchandisers edit before publishing",
        "An AI system that scores job applicants for warehouse roles and ranks who gets an interview",
        "A camera system that infers employees' emotional state on the shop floor to measure engagement",
        "A model that decides which customers are offered store credit based on their creditworthiness"
      ],
      "answer": [0],
      "explanation": "Skill 3.2.4 applies risk classification to prioritize governance effort. Drafting internal product text that humans edit affects no individual's rights or safety and is minimal risk, so lightweight review is proportionate. Ranking job applicants is a recruitment use case that the EU AI Act lists as high risk, requiring human oversight and documentation. Inferring employees' emotions in the workplace falls into the prohibited, unacceptable tier under the Act. Creditworthiness assessment of individuals is also expressly high risk. The exam tests whether the strategist can sort use cases so that scarce governance capacity goes where harm potential is greatest."
    },
    {
      "id": "e3-07",
      "domain": 4,
      "skill": "4.4.4",
      "type": "multi",
      "difficulty": "medium",
      "question": "Oakhaven Furniture has rolled out a generative AI store-associate assistant to all 40 stores. Leadership wants continuous feedback mechanisms so that the initiative keeps improving and its long-term value can be tracked, not just its launch success. Which TWO mechanisms are MOST appropriate? (Select TWO.)",
      "options": [
        "In-tool feedback on each answer (helpful or not, with reasons) that is reviewed on a fixed cadence and used to prioritize knowledge-base and prompt fixes",
        "A quarterly scorecard that links assistant usage and answer-quality trends to the business metrics the initiative was funded to move, such as attach rate and time to resolve stock queries",
        "A one-time satisfaction survey completed in the launch week and then archived",
        "Counting the total number of prompts sent each month as the sole success metric",
        "Relying on the vendor's release notes as evidence that the assistant is improving"
      ],
      "answer": [0, 1],
      "explanation": "Skill 4.4.4 calls for continuous feedback mechanisms and success metrics that track long-term value. Capturing feedback on every answer and acting on it at a set cadence closes the loop between users and the team that maintains the assistant. A recurring scorecard that ties usage and quality to the funded business outcomes shows whether value is lasting rather than a launch spike. A single launch-week survey is a snapshot, not a mechanism. Raw prompt counts measure activity, which can rise while value falls, so they cannot stand alone. Vendor release notes describe the product, not Oakhaven's results, and give no insight into store outcomes."
    },
    {
      "id": "e3-08",
      "domain": 1,
      "skill": "1.1.3",
      "type": "single",
      "difficulty": "medium",
      "question": "Meridian Health, a regional hospital group, is evaluating a vendor's readmission-risk model that uses only billing codes, lab values and length-of-stay tables. Clinicians object that the strongest warning signs, such as a patient's living situation and caregiver support, appear only in free-text discharge notes. Which statement BEST describes the data-type issue the strategist should raise?",
      "options": [
        "The model relies solely on structured data, while critical signals sit in unstructured clinical notes that require natural language processing to be used",
        "Free-text notes are structured data because they are stored in the same database as the lab values",
        "Unstructured data cannot be used by any AI system, so the clinicians' concern is irrelevant to the decision",
        "Billing codes are unstructured because their meaning depends on context"
      ],
      "answer": [0],
      "explanation": "Skill 1.1.3 distinguishes structured from unstructured data and why the distinction matters. Billing codes, lab values and stay durations are structured, tabular fields; discharge notes are unstructured text whose meaning must be extracted with natural language processing or a foundation model. If the decisive signals live in the notes, a structured-only model is blind to them, which is a legitimate strategic objection. Storage location does not make text structured. Unstructured data is precisely what modern AI, including generative AI, handles well, so dismissing the concern is wrong. Billing codes are standardized categorical values, the definition of structured data."
    },
    {
      "id": "e3-09",
      "domain": 2,
      "skill": "2.1.4",
      "type": "single",
      "difficulty": "easy",
      "question": "Meridian Health's pharmacy director asks for an AI model to calculate weight-based medication doses for pediatric patients. The dosing formulas are published, deterministic and legally mandated, and any deviation is a patient-safety event. What should the AI strategist recommend?",
      "options": [
        "Implement the published formulas as rule-based automation with validation checks, because a deterministic, mandated calculation is not a problem AI should solve",
        "Train a machine learning model on past prescriptions so it can learn the dosing patterns",
        "Use a generative AI assistant to estimate the dose from a conversational description of the patient",
        "Run both an AI model and the formula and use whichever gives the lower dose"
      ],
      "answer": [0],
      "explanation": "Skill 2.1.4 asks when AI is not the appropriate solution. Where the rule is fully specified, fixed and mandated, and where every output must be exactly correct, rule-based automation is cheaper, auditable and safer; AI adds probabilistic error for no benefit. Learning from past prescriptions would reproduce historical mistakes and cannot guarantee compliance with the formula. A generative model estimating doses from conversation introduces hallucination risk into a safety-critical calculation. Running both and picking the lower dose is arbitrary and could under-dose patients. The strategist's job is to recognize that some problems are solved by rules, not by learning."
    },
    {
      "id": "e3-10",
      "domain": 3,
      "skill": "3.1.2",
      "type": "single",
      "difficulty": "hard",
      "question": "Meridian Health's sepsis early-warning model can be tuned to catch 95 percent of true cases, but at that setting it fires so many false alarms that nurses have begun ignoring alerts. A less sensitive setting halves the alarms but misses more real cases. The clinical lead wants maximum sensitivity; nursing leadership warns about alert fatigue. How should the strategist frame the decision?",
      "options": [
        "As an explicit, documented tradeoff between safety dimensions, chosen with clinicians and revisited with monitoring data, because an alert that is ignored provides no safety benefit",
        "As a purely technical parameter that the data science team should set without clinical involvement",
        "As a non-issue, because maximizing the detection rate is always the responsible choice",
        "As a cost question, selecting whichever setting generates the fewest alert notifications to save money"
      ],
      "answer": [0],
      "explanation": "Skill 3.1.2 is about navigating tradeoffs when objectives conflict with responsible AI principles. Here safety pulls in two directions: missed cases versus alert fatigue that erodes trust and causes real alerts to be ignored. Responsible practice is to make the tradeoff explicit, decide it with the affected clinicians, document the rationale, and revisit it as monitoring reveals real-world alert response rates. Treating the threshold as a hidden technical knob removes accountability from the people who bear the consequences. Declaring maximum sensitivity always right ignores the evidence that ignored alerts deliver zero protection. Choosing on notification cost alone subordinates patient safety to a trivial expense."
    },
    {
      "id": "e3-11",
      "domain": 4,
      "skill": "4.3.2",
      "type": "multi",
      "difficulty": "medium",
      "question": "Meridian Health is forming the delivery team for a clinical documentation assistant that will draft notes for physicians to review. Which THREE actions BEST reflect good practice for building a cross-functional team with clear accountability? (Select THREE.)",
      "options": [
        "Include practicing clinicians, privacy and compliance specialists, and technical staff on the core team rather than consulting them only at sign-off",
        "Name a single accountable business owner, the chief medical information officer, who is responsible for the assistant's outcomes and go-live decisions",
        "Define decision rights in writing so that everyone knows who approves clinical content changes, who approves releases and who can halt the system",
        "Staff the team entirely with data scientists so that decisions are made quickly without non-technical debate",
        "Leave accountability deliberately shared across all members so that no individual feels exposed if something goes wrong",
        "Exclude the privacy officer until after launch to avoid slowing the pilot"
      ],
      "answer": [0, 1, 2],
      "explanation": "Skill 4.3.2 asks for cross-functional teams with diverse expertise and clear accountability standards. Embedding clinicians, privacy and compliance, and technologists in the core team ensures the assistant is usable, lawful and buildable. A named accountable owner, here the chief medical information officer, gives the initiative a single point of ownership for outcomes. Written decision rights make accountability operational by stating who approves what and who can stop the system. An all-data-scientist team lacks the clinical and legal perspectives that determine whether notes are safe. Diffuse accountability sounds collegial but means nobody is answerable. Excluding privacy until after launch invites rework and regulatory exposure."
    },
    {
      "id": "e3-12",
      "domain": 1,
      "skill": "1.3.3",
      "type": "single",
      "difficulty": "medium",
      "question": "Meridian Health wants a generative AI assistant that writes discharge summaries in the group's strict house style and also references the hospital formulary, which changes every month. The team is debating whether to fine-tune a model or to use Retrieval Augmented Generation (RAG). Which statement is MOST accurate?",
      "options": [
        "The two techniques are complementary: fine-tuning or detailed prompting shapes style and structure, while RAG supplies the current formulary at query time",
        "Fine-tuning alone is sufficient because a fine-tuned model automatically learns new formulary changes as they happen",
        "RAG alone is sufficient because retrieving documents also teaches the model the house writing style permanently",
        "Neither technique is needed because foundation models already contain every hospital's formulary"
      ],
      "answer": [0],
      "explanation": "Skill 1.3.3 covers how model adaptation techniques improve responses for specific needs. Fine-tuning adjusts a model's behaviour and style using examples, but it freezes knowledge at training time, so monthly formulary changes would require constant retraining. RAG retrieves current documents at query time, so it is the right tool for frequently changing facts, but retrieval does not permanently change the model's writing style. The techniques therefore solve different problems and are often combined. Claiming fine-tuning self-updates misunderstands how training works. Claiming a foundation model already knows a specific hospital's formulary ignores that such data is private and changing."
    },
    {
      "id": "e3-13",
      "domain": 2,
      "skill": "2.2.2",
      "type": "single",
      "difficulty": "medium",
      "question": "Meridian Health plans to launch its clinical documentation assistant in January and claims it will reduce physician documentation time. The team proposes to measure documentation time in December, the peak of flu season, as the baseline, and compare it with March. What is the MOST important flaw the strategist should raise?",
      "options": [
        "The baseline and comparison periods are not comparable, so seasonal workload differences could be mistaken for the effect of the assistant",
        "Baselines are unnecessary because the vendor has already published average time savings from other hospitals",
        "Documentation time is impossible to measure, so a qualitative impression from department heads should be used instead",
        "The baseline should be captured after launch so that it reflects the new workflow"
      ],
      "answer": [0],
      "explanation": "Skill 2.2.2 is about establishing baseline metrics before implementation so that effects can be attributed accurately. A baseline is only useful if it is measured under conditions comparable to the post-launch period; comparing peak flu season with a quieter month confounds seasonality with the intervention. Better options include a same-month comparison with the prior year, a longer baseline window or a control group of departments. Vendor averages describe other organizations and cannot serve as Meridian's own baseline. Documentation time is measurable from system timestamps, so replacing it with impressions discards evidence. A baseline captured after launch is, by definition, no longer a baseline."
    },
    {
      "id": "e3-14",
      "domain": 3,
      "skill": "3.2.4",
      "type": "single",
      "difficulty": "medium",
      "question": "Meridian Health classified its emergency-department triage assistant as limited risk because it only summarizes intake notes for nurses. Six months later, a department began using the same assistant's output to decide which patients wait longer. Under a lifecycle-based risk classification framework, what should the governance team do?",
      "options": [
        "Reclassify the system because its risk tier depends on the actual use and impact on individuals, and apply the controls required for the higher tier before the new use continues",
        "Keep the original classification because risk tiers are assigned once at project approval",
        "Lower the classification because the system has operated for six months without a reported incident",
        "Treat the new use as out of scope for governance because the software itself has not changed"
      ],
      "answer": [0],
      "explanation": "Skill 3.2.4 requires applying risk classification across the AI lifecycle, not only at intake. Risk tiers in frameworks such as the EU AI Act and the NIST AI Risk Management Framework are driven by context and consequence; using triage summaries to determine who waits affects patient safety and access to care, which is a materially higher-risk use. The right response is reclassification and application of the stronger controls, such as human oversight criteria and validation, before the new use continues. One-time classification ignores that purpose changes over time. Absence of incidents is not evidence of low risk. Unchanged code with changed use is exactly the situation lifecycle governance exists to catch."
    },
    {
      "id": "e3-15",
      "domain": 4,
      "skill": "4.1.3",
      "type": "single",
      "difficulty": "medium",
      "question": "Meridian Health has a modern cloud data platform, a committed chief executive sponsor and a funded AI budget, yet two clinical AI projects have been halted before go-live. A review finds that nobody owns clinical validation of models, there is no defined process for approving a model for patient-facing use and no one can say who signs off on risk. Which capability gap category BEST describes what is blocking the transformation?",
      "options": [
        "Process and governance gaps: missing validation ownership, approval workflow and risk sign-off roles",
        "Technology gaps: the data platform is insufficient for clinical workloads",
        "Leadership gaps: the chief executive is not visibly committed to AI",
        "Funding gaps: the budget is too small to complete the projects"
      ],
      "answer": [0],
      "explanation": "Skill 4.1.3 asks the strategist to identify specific capability gaps across people, process, technology and governance. The evidence points to absent process (no approval workflow), absent governance (no risk sign-off role) and a missing accountable role for clinical validation, which together stop otherwise healthy projects at the finish line. The platform and funding are described as adequate, so technology and budget gaps are ruled out by the facts. Executive sponsorship is explicitly present, so leadership commitment is not the blocker. The exam rewards diagnosing the actual missing capability rather than defaulting to more technology or more money."
    },
    {
      "id": "e3-16",
      "domain": 2,
      "skill": "2.2.4",
      "type": "multi",
      "difficulty": "medium",
      "question": "Six weeks after launching its clinical documentation assistant, Meridian Health wants early evidence that the initiative is on track, long before annual productivity and cost outcomes can be measured. Which TWO metrics are leading indicators of success? (Select TWO.)",
      "options": [
        "The percentage of eligible physicians who use the assistant for at least half of their notes each week",
        "The share of drafted notes that physicians accept with minor or no edits",
        "The audited annual reduction in overtime payments for documentation",
        "The change in patient readmission rates over the next 18 months",
        "The total number of servers running in the data centre"
      ],
      "answer": [0, 1],
      "explanation": "Skill 2.2.4 distinguishes leading indicators that predict success from lagging outcomes that confirm it. Sustained weekly adoption shows the tool fits the workflow, and a high acceptance rate with minimal edits shows draft quality is good enough to save time; both are measurable within weeks and strongly predict later productivity gains. Annual overtime reduction is a lagging financial outcome that will not be visible for a year. Readmission changes over 18 months are even further downstream and influenced by many other factors. Server counts are an infrastructure statistic with no relationship to whether clinicians find the assistant valuable."
    },
    {
      "id": "e3-17",
      "domain": 1,
      "skill": "1.2.3",
      "type": "single",
      "difficulty": "medium",
      "question": "Payrail, a payments fintech, deployed a card-fraud detection model that performed well for a year. After Payrail launched a new instant bank-transfer product, the model's fraud catch rate fell while customer complaints about blocked legitimate payments rose. Fraudsters have also begun probing the new product. Which explanation and response are MOST appropriate?",
      "options": [
        "The model is experiencing drift because transaction patterns and attacker behaviour have changed; Payrail needs ongoing performance monitoring with defined retraining triggers rather than a one-time fix",
        "The model has a software bug that can be fixed once, after which no further monitoring is needed",
        "The model is working correctly because fraud models never need updating once they pass acceptance testing",
        "The fall in performance is irrelevant as long as the model was accurate at launch"
      ],
      "answer": [0],
      "explanation": "Skill 1.2.3 explains why AI solutions need ongoing monitoring and updates to detect and remediate model drift. A new product changes the distribution of legitimate transactions, and adaptive fraudsters change the patterns the model was trained to recognize, so performance decays even though the code is unchanged. The business response is a monitoring regime that tracks catch rate and false positives and sets thresholds that trigger retraining. Calling this a one-off bug misreads a statistical phenomenon as a defect. Claiming fraud models never need updating ignores that adversaries deliberately adapt. Launch accuracy is a historical fact, not a guarantee of current protection."
    },
    {
      "id": "e3-18",
      "domain": 2,
      "skill": "2.1.2",
      "type": "single",
      "difficulty": "medium",
      "question": "Payrail is deciding how to source two AI capabilities. Fraud detection is its core differentiator, built on proprietary transaction data that no vendor has. A customer-support assistant, by contrast, is a common capability with many mature offerings. Payrail has a strong machine learning team but limited time for non-core work. Which sourcing pattern is MOST appropriate?",
      "options": [
        "Build the fraud model in house on Amazon SageMaker AI to protect the proprietary advantage, and buy or partner for the support assistant, for example through an AWS Marketplace listing",
        "Buy both capabilities from the same vendor to simplify procurement, even though it means sharing the proprietary fraud data",
        "Build both capabilities in house so that the machine learning team stays fully utilized",
        "Partner with a competitor to co-develop fraud detection so that costs are shared"
      ],
      "answer": [0],
      "explanation": "Skill 2.1.2 evaluates build-buy-partner decisions using budget, timeline, capability and strategic factors. Capabilities that differentiate and depend on proprietary data are strong build candidates, especially when the team can execute on a managed platform such as Amazon SageMaker AI. Commodity capabilities with mature vendor markets are better bought or partnered, and AWS Marketplace shortens evaluation and procurement of such offerings. Buying both would hand a vendor the data that makes Payrail different. Building both spends scarce engineering time on a problem the market already solves. Co-developing the core differentiator with a competitor gives away the very advantage the company is trying to protect."
    },
    {
      "id": "e3-19",
      "domain": 3,
      "skill": "3.2.2",
      "type": "single",
      "difficulty": "hard",
      "question": "Payrail operates in the European Union and runs two AI systems: one assesses the creditworthiness of consumers who apply for its buy-now-pay-later product, and one detects fraudulent transactions in real time. The compliance lead asks how the EU AI Act is likely to treat them. Which assessment is MOST accurate?",
      "options": [
        "The creditworthiness system is in the high-risk category and must meet obligations such as risk management, documentation and human oversight; the financial fraud detection system is not classified as high risk under the Act",
        "Both systems are prohibited because they process financial data about individuals",
        "Both systems are minimal risk because they operate inside a regulated bank-like entity",
        "The fraud detection system is high risk and the creditworthiness system is minimal risk, because fraud blocking has a larger direct effect on customers"
      ],
      "answer": [0],
      "explanation": "Skill 3.2.2 covers identifying regulatory compliance risks for AI-enabled processes. The EU AI Act lists AI used to evaluate the creditworthiness of natural persons among high-risk uses, bringing obligations such as risk management, data governance, logging, human oversight and conformity assessment; the same annex carves out AI systems used to detect financial fraud from that classification. Neither system is prohibited; the unacceptable tier covers practices such as social scoring and manipulative systems. Treating both as minimal risk because the company is regulated misunderstands that the Act classifies by use case, not by sector. Reversing the two gets the specific legal treatment backwards."
    },
    {
      "id": "e3-20",
      "domain": 4,
      "skill": "4.4.6",
      "type": "multi",
      "difficulty": "hard",
      "question": "Payrail's generative AI dispute-resolution assistant succeeded for one country and is now being scaled to 12 markets and ten times the transaction volume on Amazon Bedrock. Leadership asks what must be evaluated to protect business continuity and performance during the scale-up. Which TWO factors are MOST important? (Select TWO.)",
      "options": [
        "Capacity and resilience planning, including whether on-demand quotas or a Provisioned Throughput or reserved tier are needed for peak volume and what the fallback is if a model or Region is unavailable",
        "Dependency and performance risk across markets, such as language coverage, latency for distant users and the impact of a single model version change on all 12 markets at once",
        "Whether the assistant's user interface uses the company's newest colour palette",
        "Whether to abandon monitoring now that the pilot has proven the concept",
        "Whether to switch every market to the cheapest available model regardless of quality results"
      ],
      "answer": [0, 1],
      "explanation": "Skill 4.4.6 asks the strategist to evaluate multiple factors during scaling to ensure business continuity and performance. A tenfold volume increase raises capacity questions, including quotas, the case for committed capacity and what happens if a model or Region fails, so resilience planning is central. Scaling across markets also multiplies dependencies: language performance, latency and the blast radius of a model change now affect many customers simultaneously, so staged rollouts and regression checks matter. Interface colours are cosmetic. Dropping monitoring after a pilot removes the very signal needed during the riskiest phase. Choosing the cheapest model without quality evidence trades continuity and customer trust for savings."
    },
    {
      "id": "e3-21",
      "domain": 1,
      "skill": "1.1.5",
      "type": "single",
      "difficulty": "hard",
      "question": "Payrail wants to train a new fraud model using transactions from the most recent month so that the model reflects the latest behaviour. The data science lead objects that confirmed fraud labels arrive through chargebacks, which typically take 45 to 90 days to be reported. Why is the lead's objection valid?",
      "options": [
        "Supervised training requires historical examples with known outcomes, and most of last month's transactions do not yet have confirmed labels, so the model would learn from incomplete or misleading ground truth",
        "Models can only be trained on data that is at least five years old",
        "The most recent month has too many transactions for any model to process",
        "Chargebacks are irrelevant to fraud detection and should not be used as labels at all"
      ],
      "answer": [0],
      "explanation": "Skill 1.1.5 covers how models are trained from historical data. Supervised learning needs examples paired with known outcomes, the labels. When confirmation of fraud lags by 45 to 90 days, very recent transactions are mostly unlabelled or wrongly labelled as legitimate, so a model trained on them would learn a distorted picture. The business implication is a deliberate label-maturity window, balancing recency against label completeness. There is no rule requiring data to be five years old; recency is valuable once labels are reliable. Volume is a compute question, not the issue raised. Chargebacks are a primary source of fraud ground truth, so discarding them would remove the labels entirely."
    },
    {
      "id": "e3-22",
      "domain": 2,
      "skill": "2.3.2",
      "type": "multi",
      "difficulty": "medium",
      "question": "Payrail's board wants to use the company's AI capabilities to transform its business model, not just to reduce internal costs. Which TWO opportunities represent business model transformation rather than operational improvement? (Select TWO.)",
      "options": [
        "Offering Payrail's fraud-risk scoring to other merchants and fintechs as a paid, usage-based service, creating a new revenue line from an internal capability",
        "Launching an AI-driven embedded cash-flow forecasting and dynamic settlement product for small merchants, priced on the value delivered rather than per transaction",
        "Using generative AI to summarize internal compliance meetings",
        "Automating the monthly reconciliation reports that the finance team already produces",
        "Reducing the number of customer-support agents by introducing an FAQ chatbot"
      ],
      "answer": [0, 1],
      "explanation": "Skill 2.3.2 asks the strategist to identify opportunities to transform business models with AI. Selling fraud scoring as a service turns a cost centre into a product with a new customer base and revenue model, a classic capability-to-product transformation. An embedded forecasting and settlement product changes what Payrail sells and how it prices, moving from per-transaction fees to value-based pricing. Summarizing meetings, automating existing reports and shrinking a support team are all operational improvements: they make the current model cheaper or faster but do not change who the customers are, what is sold or how revenue is earned."
    },
    {
      "id": "e3-23",
      "domain": 3,
      "skill": "3.3.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "Payrail is about to let an AI agent resolve customer disputes end to end, including issuing refunds directly to customer accounts. The risk committee asks which production controls and monitoring mechanisms are essential before launch. Which TWO are MOST important? (Select TWO.)",
      "options": [
        "Transaction limits so that refunds above a defined amount, or unusual patterns such as repeated refunds to one account, require human approval",
        "Complete logging of each agent decision, the tools it called and the data it used, with automated anomaly alerts and a tested ability to pause the agent",
        "Allowing the agent unlimited refund authority to maximize customer satisfaction scores",
        "Reviewing the agent's decisions once a year during the external audit only",
        "Disabling logging to reduce storage costs now that the agent has passed testing"
      ],
      "answer": [0, 1],
      "explanation": "Skill 3.3.1 is about identifying the need for risk controls and monitoring for AI systems in production. An agent that moves money needs bounded authority: value thresholds and pattern-based triggers that escalate to a human are the primary control against error and abuse. Decision and tool-call logging, anomaly alerting and a tested pause mechanism provide the observability and kill switch needed to detect and contain problems quickly. Unlimited authority removes the control that makes autonomy acceptable. Annual review is far too slow for a system acting thousands of times a day. Disabling logs to save storage destroys the audit trail that regulators and investigators will require."
    },
    {
      "id": "e3-24",
      "domain": 4,
      "skill": "4.1.4",
      "type": "single",
      "difficulty": "medium",
      "question": "A maturity assessment shows that Payrail is at enterprise scale for traditional machine learning: it has mature model risk management, monitoring and a central platform team for its fraud models. For generative AI it is only experimenting, with no approved use cases in production. Leadership wants a progression pathway for generative AI. Which approach is MOST appropriate?",
      "options": [
        "Extend the existing model risk, monitoring and platform capabilities to cover generative AI, and sequence a few bounded production use cases that build on those foundations before pursuing autonomous agents",
        "Treat generative AI as a completely separate journey and rebuild governance and platform capabilities from scratch in a new team",
        "Skip directly to enterprise-wide agentic automation because the company is already mature in machine learning",
        "Stop generative AI experimentation until the fraud models have been retired"
      ],
      "answer": [0],
      "explanation": "Skill 4.1.4 covers prioritizing development investments and creating progression pathways based on current maturity and strategic objectives. Maturity is not uniform across AI types, so the assessment should drive a pathway that reuses what already works, such as model risk processes, monitoring and platform teams, while adding what generative AI uniquely needs, like prompt and output evaluation. Bounded production use cases build evidence before higher-autonomy agents. Rebuilding everything in a silo wastes proven capability and creates inconsistent governance. Jumping to enterprise agents assumes machine learning maturity transfers automatically, which it does not. Halting experimentation sacrifices learning and has no connection to the fraud models' lifecycle."
    },
    {
      "id": "e3-25",
      "domain": 1,
      "skill": "1.2.1",
      "type": "single",
      "difficulty": "easy",
      "question": "Larkspur City Council wants to automate two tasks: deciding whether a resident qualifies for a parking permit, which depends on a fixed set of published criteria, and triaging thousands of free-text resident complaints into the right department. Which approach is MOST appropriate?",
      "options": [
        "Use rule-based automation for permit eligibility and a machine learning or natural language classifier for complaint triage",
        "Use machine learning for both tasks so that the council has a single technology",
        "Use rule-based automation for both tasks by writing a keyword rule for every possible complaint wording",
        "Use generative AI to decide permit eligibility so that borderline cases receive creative interpretations"
      ],
      "answer": [0],
      "explanation": "Skill 1.2.1 asks when to use rule-based automation and when to use AI. Permit eligibility depends on fixed, published criteria, so rules are transparent, exact and easy to audit. Complaint triage involves varied, unstructured language that cannot be enumerated in advance, which is where a learned classifier earns its place. Forcing both into machine learning adds unnecessary opacity to a deterministic decision. Writing keyword rules for every complaint phrasing is brittle and quickly unmanageable. Letting generative AI interpret eligibility creatively would produce inconsistent outcomes for a decision that must be applied identically to every resident."
    },
    {
      "id": "e3-26",
      "domain": 2,
      "skill": "2.2.3",
      "type": "multi",
      "difficulty": "hard",
      "question": "Larkspur City Council's business case for an AI document-processing service claims an annual return of 400,000 dollars, calculated as 10,000 staff hours saved multiplied by a loaded hourly rate, minus the software subscription. The finance director challenges the figure. Which TWO corrections are MOST important for a comprehensive ROI calculation? (Select TWO.)",
      "options": [
        "Distinguish cost avoidance from realized savings: hours saved only reduce spending if the time is redeployed to funded work, vacancies are left unfilled or overtime falls, so the value should be stated accordingly",
        "Include the full cost side, such as implementation, integration, training, change management, ongoing governance and cloud usage, not just the subscription",
        "Exclude citizen service improvements entirely because public bodies cannot count intangible benefits",
        "Double the hours saved to account for optimism in the vendor's estimate",
        "Report the return only after five years so that the first-year costs are hidden"
      ],
      "answer": [0, 1],
      "explanation": "Skill 2.2.3 requires calculating ROI with comprehensive frameworks. Productivity gains are real only when they turn into something the organization can count: redeployed capacity against funded demand, lower overtime or unfilled vacancies; otherwise they are cost avoidance and should be labelled as such. The cost side must include implementation, integration, training, change management, governance and consumption-based cloud charges, which often exceed the licence. Intangible benefits such as faster citizen service should be captured and described, not excluded. Inflating hours to offset optimism replaces one guess with another. Deferring reporting to hide early costs undermines the credibility the finance director is asking for."
    },
    {
      "id": "e3-27",
      "domain": 3,
      "skill": "3.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "Larkspur City Council is launching a generative AI assistant on its website to answer residents' questions about bin collection, permits and local services. The council decides the assistant must clearly tell residents that they are interacting with an AI system, state what it can and cannot do, and offer a path to a human. Which responsible AI dimension does this decision MOST directly address?",
      "options": [
        "Transparency",
        "Robustness",
        "Fairness",
        "Controllability"
      ],
      "answer": [0],
      "explanation": "Skill 3.1.1 applies responsible AI dimensions to business scenarios. Disclosing that a resident is talking to an AI, explaining its capabilities and limitations, and signposting human help are transparency practices; they let people understand and calibrate their trust in the system, and they align with transparency obligations in frameworks such as the EU AI Act. Robustness concerns the system performing reliably under varied or adverse inputs. Fairness concerns equitable treatment of different groups. Controllability concerns the organization's ability to monitor and steer the system's behaviour. All matter for the assistant, but the disclosure decision belongs to transparency."
    },
    {
      "id": "e3-28",
      "domain": 4,
      "skill": "4.4.2",
      "type": "single",
      "difficulty": "easy",
      "question": "Larkspur City Council has never deployed AI. Leadership wants a scaling approach that starts with a short-term win and builds credibility for later, larger programmes. Four candidate first projects are proposed. Which is the BEST first win?",
      "options": [
        "An internal assistant that summarizes freedom-of-information requests for the records team: low risk, measurable time savings within weeks and a visible, vocal user group",
        "An AI system that automatically decides housing-benefit eligibility for vulnerable residents",
        "A three-year programme to rebuild every council service around AI before showing any results",
        "A model that predicts child-protection risk and is deployed directly to social workers' caseloads"
      ],
      "answer": [0],
      "explanation": "Skill 4.4.2 is about scaling methodologies that begin with short-term wins. A good first win is low risk, delivers measurable value quickly and has users who will champion it, which the records-team assistant provides. Automating benefit eligibility for vulnerable residents is high stakes and high scrutiny, a poor place to learn. A three-year rebuild with no interim results is the opposite of a quick win and risks losing political support. Child-protection risk prediction touches the most sensitive decisions a council makes and demands mature governance that a first-time adopter does not yet have."
    },
    {
      "id": "e3-29",
      "domain": 1,
      "skill": "1.2.4",
      "type": "single",
      "difficulty": "medium",
      "question": "Larkspur City Council discovers that staff in several departments are using at least nine different consumer generative AI tools, some with resident data. The council wants to reduce shadow AI without driving usage further underground. Which element is MOST important to make its AI tool classification effective?",
      "options": [
        "Publish a register that classifies each tool as approved, under evaluation or blocked, with the criteria used, the approved alternative for each need and a quick route for staff to request evaluation of new tools",
        "Block every generative AI tool at the network level and announce that any use is a disciplinary matter",
        "Keep the list of approved tools confidential to the IT department so that staff cannot find loopholes",
        "Approve all tools currently in use to avoid friction with departments"
      ],
      "answer": [0],
      "explanation": "Skill 1.2.4 is about transparent classification of AI tools to mitigate shadow AI. Shadow AI grows when people have a need and no sanctioned way to meet it, so an effective classification is visible, explains its reasoning, points to an approved alternative and offers a fast evaluation path for new requests. A blanket ban with threats does not remove the need and typically pushes usage to personal devices where resident data is even less protected. A confidential list cannot guide behaviour that staff never see. Approving everything already in use abandons the risk assessment that classification exists to provide."
    },
    {
      "id": "e3-30",
      "domain": 2,
      "skill": "2.3.4",
      "type": "single",
      "difficulty": "medium",
      "question": "Larkspur City Council has no commercial competitors, and AI adoption among comparable councils is still early. Residents increasingly expect digital services, and the council faces a flat budget. A councillor proposes committing a large share of the technology budget to an ambitious AI programme to 'get ahead'. How should the strategist advise on the appropriate investment level?",
      "options": [
        "Calibrate investment to service demand and foundational readiness: fund data, governance and a small number of proven use cases now, with staged increases tied to demonstrated value, because the sector's maturity and the absence of competitive pressure do not justify an all-in bet",
        "Match the largest private-sector AI budgets because investment levels should be the same in every industry",
        "Invest nothing until every other council has adopted AI and the technology is fully proven",
        "Spend the full amount immediately on the most advanced agentic platform available"
      ],
      "answer": [0],
      "explanation": "Skill 2.3.4 concerns determining investment levels based on industry maturity and competitive dynamics. In a sector with early adoption and no rivals to outpace, the drivers are citizen expectations, service demand and readiness, which argue for a measured, foundations-first investment that scales as value is proven. Copying private-sector budgets ignores that the council's dynamics and risk tolerance are different. Waiting for universal adoption forfeits efficiency gains and learning while expectations rise. An immediate all-in purchase of advanced agentic tooling outruns the council's maturity and leaves no room to learn from early results."
    },
    {
      "id": "e3-31",
      "domain": 3,
      "skill": "3.2.1",
      "type": "single",
      "difficulty": "medium",
      "question": "Larkspur City Council is establishing an AI governance board. The chief information officer proposes that the board consist of IT managers and the AI vendor's account team, with decisions made by consensus and no named owner. Which change is MOST important to give the board appropriate representation and clear accountability?",
      "options": [
        "Appoint a senior council officer as the accountable chair, add service directors, legal, the data protection officer and a resident or ethics representative, and remove the vendor from decision-making roles",
        "Keep the proposed membership but double the meeting frequency",
        "Replace the IT managers with the vendor's engineers so that technical expertise is maximized",
        "Make the vendor's account manager the chair because the vendor understands the technology best"
      ],
      "answer": [0],
      "explanation": "Skill 3.2.1 asks for governance structures with cross-functional representation and clear accountability. Decisions about AI in public services affect residents, legal exposure and service outcomes, so the board needs the people who own those domains: service directors, legal, data protection and a voice for residents, chaired by an accountable senior officer who answers for decisions. A vendor has a commercial interest and should advise, not decide. More frequent meetings of the wrong people do not fix representation. Swapping in vendor engineers deepens the conflict of interest and removes the organization's own knowledge. A vendor-led chair would outsource accountability that the council cannot delegate."
    },
    {
      "id": "e3-32",
      "domain": 4,
      "skill": "4.3.4",
      "type": "single",
      "difficulty": "medium",
      "question": "Larkspur City Council's managers refuse to sponsor AI pilots. Interviews reveal that because every council decision is subject to public records requests, audit and local press scrutiny, managers believe any AI failure will be exposed and career-ending. Which leadership intervention BEST addresses this cultural barrier?",
      "options": [
        "Define an explicit risk appetite with tiers of permitted experimentation, publicly commit that leadership owns the outcomes of sanctioned pilots, and share lessons from both successes and failures openly",
        "Tell managers that failure is not an option and that pilots must succeed",
        "Hide the pilots from the public record so that failures cannot be scrutinized",
        "Outsource all pilots to a consultancy so that no council manager is associated with them"
      ],
      "answer": [0],
      "explanation": "Skill 4.3.4 covers recognizing cultural barriers such as risk aversion and fear of failure and choosing leadership interventions. The barrier here is rational: public accountability makes individual exposure costly. Leadership can lower that cost by stating the organization's risk appetite, pre-approving bounded experiments, visibly taking ownership of sanctioned pilot outcomes and normalizing learning from setbacks. Demanding success intensifies the fear that is causing paralysis. Concealing pilots from the public record is improper for a public body and would destroy trust if discovered. Outsourcing to avoid association transfers learning outside the council and leaves the cultural problem untouched."
    },
    {
      "id": "e3-33",
      "domain": 1,
      "skill": "1.1.4",
      "type": "single",
      "difficulty": "medium",
      "question": "Brightwater Beverages, a food and beverage manufacturer, trained a computer-vision model to spot defective bottle seals using 200,000 images labelled by quality inspectors across three plants. The model's accuracy is poor. Investigation shows that inspectors at each plant used different definitions of a defect, and the same seal was sometimes labelled both ways. What is the MOST appropriate conclusion?",
      "options": [
        "Label quality is the root cause: inconsistent ground truth teaches the model contradictory patterns, so Brightwater should standardize the defect definition and relabel before collecting more images",
        "The data set is too small, so the fix is to collect another million images labelled in the same way",
        "The camera hardware is at fault and should be replaced at all three plants",
        "Computer vision cannot detect seal defects, so the project should be abandoned"
      ],
      "answer": [0],
      "explanation": "Skill 1.1.4 explains why data quality determines AI outcomes. A model can only be as consistent as its labels; when the same condition is labelled defective at one plant and acceptable at another, the model learns noise. The remedy is a shared definition, labelling guidelines and relabelling, after which performance can be judged fairly. Adding a million more images with the same inconsistent labels scales the problem rather than solving it. There is no evidence of a hardware fault. Computer vision is a proven approach for visual inspection, so abandoning it misattributes a data problem to the technology. Quality beats quantity when the labels disagree."
    },
    {
      "id": "e3-34",
      "domain": 2,
      "skill": "2.1.3",
      "type": "single",
      "difficulty": "hard",
      "question": "Brightwater Beverages reviews its AI portfolio. One initiative, an AI model that optimizes the company's own fleet-delivery routes, is technically excellent, under budget and beating its targets. However, the board has just approved outsourcing all distribution to a third-party logistics provider within nine months. What should the portfolio review recommend for this initiative?",
      "options": [
        "Terminate or wind down the initiative with an orderly handover, because it no longer aligns with strategy and its value will disappear when the process is outsourced, regardless of its performance",
        "Scale the initiative immediately to all regions because it is exceeding its targets",
        "Pause it indefinitely while keeping the full team on standby in case the outsourcing decision is reversed",
        "Continue as is, since successful initiatives should never be cancelled"
      ],
      "answer": [0],
      "explanation": "Skill 2.1.3 prioritizes initiatives on business value, feasibility, sustainability and strategic alignment, with decisions to scale, pause or terminate. Here performance is strong but strategic alignment has collapsed: the process the model optimizes will leave the company, so its future value is near zero. Rational portfolio management reallocates the talent and budget and, where possible, transfers learnings or negotiates the capability into the outsourcing contract. Scaling a capability that will be retired wastes resources. An indefinite pause with a full standby team consumes budget for an unlikely reversal. Treating success as immunity from cancellation confuses past performance with future value."
    },
    {
      "id": "e3-35",
      "domain": 3,
      "skill": "3.3.2",
      "type": "single",
      "difficulty": "hard",
      "question": "Brightwater Beverages built a model to predict which new flavours will sell, trained on purchase data from its loyalty app. Launch decisions based on the model have performed well in cities but poorly in rural regions, where app usage is low and most sales go through independent stores. Where in the AI lifecycle did bias MOST likely enter, and what does it imply for governance?",
      "options": [
        "At data collection, because the loyalty app sample under-represents rural customers; governance should require representativeness checks at design time and ongoing monitoring of outcome gaps by region",
        "At deployment, because the rural stores run older computers that cannot display the model's output correctly",
        "Nowhere, because a model trained on real customer data cannot be biased",
        "At model selection, because only deep learning models are capable of bias"
      ],
      "answer": [0],
      "explanation": "Skill 3.3.2 recognizes that bias can enter at multiple lifecycle stages and requires ongoing monitoring. The training sample came from app users, who skew urban, so the model learned city preferences and generalizes poorly to rural customers who buy through other channels: a sampling bias introduced at data collection. Governance should therefore check representativeness before training and keep monitoring outcome disparities by segment, because populations and channels shift over time. Display hardware does not change a prediction's accuracy. Real data reflects real-world skews, which is precisely how bias arises. Bias is a property of data and process, not of a particular model family."
    },
    {
      "id": "e3-36",
      "domain": 4,
      "skill": "4.4.3",
      "type": "single",
      "difficulty": "medium",
      "question": "Brightwater Beverages has six plants, each running its own AI experiments with different vendors, no shared standards and duplicated effort. Plant engineers have deep process knowledge that a central team lacks. Leadership wants a center of excellence (COE) model that supports scaling without stripping the plants of ownership. Which operating model is MOST appropriate?",
      "options": [
        "A hub-and-spoke COE: a small central hub owning platform, standards, reusable assets and governance, with embedded plant-level teams that select and deliver use cases using those shared foundations",
        "A fully centralized COE that takes over every AI project and removes plant teams from AI work",
        "No COE at all, leaving each plant to continue independently to preserve autonomy",
        "A COE made up only of external consultants who report quarterly to the board"
      ],
      "answer": [0],
      "explanation": "Skill 4.4.3 covers establishing AI centers of excellence and collaboration mechanisms that support scaling. A hub-and-spoke design balances the two needs: the hub provides shared platform, standards, templates and governance so that effort is not duplicated, while the spokes retain the domain knowledge and ownership that make plant-level use cases succeed. Full centralization creates a bottleneck and discards the engineers' process expertise. Doing nothing preserves the duplication and inconsistency that prompted the review. A consultant-only COE builds no internal capability and is disconnected from both the plants and day-to-day decisions."
    },
    {
      "id": "e3-37",
      "domain": 1,
      "skill": "1.3.1",
      "type": "single",
      "difficulty": "easy",
      "question": "Brightwater Beverages' research team uses a generative AI assistant to summarize ingredient-supplier specifications. The summaries vary in layout, sometimes omit allergen details and occasionally state values that are not in the source. Which prompt engineering change is MOST likely to improve the output?",
      "options": [
        "Specify a required output structure with named sections including allergens, instruct the assistant to use only the supplied document and to state when information is missing rather than guessing",
        "Shorten the prompt to a single word such as 'summarize' so the model has maximum freedom",
        "Ask the same question ten times and keep the longest answer",
        "Instruct the assistant to be creative and fill gaps with typical industry values"
      ],
      "answer": [0],
      "explanation": "Skill 1.3.1 applies basic prompt engineering principles. Clear instructions about structure, required fields and source constraints shape consistent, complete outputs, and telling the model to flag missing information instead of inferring it reduces fabricated values. A one-word prompt removes the guidance that produces consistency. Repeating the request and keeping the longest answer rewards verbosity, not accuracy. Inviting creativity and gap-filling with typical values is the opposite of what a specification summary needs and would make hallucinated allergen data more likely, which is a safety issue for a food manufacturer."
    },
    {
      "id": "e3-38",
      "domain": 2,
      "skill": "2.1.5",
      "type": "multi",
      "difficulty": "medium",
      "question": "Brightwater Beverages plans to replace its spreadsheet-based monthly production-planning process with an AI demand-forecasting solution. Planners rely on the current process to commit raw-material orders worth millions. Which TWO considerations are MOST important when preparing the transition? (Select TWO.)",
      "options": [
        "Run the AI forecast in parallel with the existing process for several cycles, with defined accuracy criteria and a rollback plan, so that business continuity is protected while confidence is built",
        "Confirm that the historical sales, promotion and inventory data the model needs is accessible, complete and consistently defined before cut-over",
        "Switch off the spreadsheet process on day one so planners are forced to trust the model",
        "Keep the transition secret from the planners to avoid resistance",
        "Assume cloud consumption costs will be zero because the model replaces a spreadsheet"
      ],
      "answer": [0, 1],
      "explanation": "Skill 2.1.5 evaluates key considerations when transitioning business processes to AI, including business continuity, data readiness, cost and performance. A parallel run with explicit acceptance criteria and a rollback path lets the company verify the forecast against real outcomes before millions in orders depend on it. Data readiness is the other precondition: forecasting is only as good as the history it learns from, so accessibility and consistent definitions must be confirmed. A hard cut-over removes the safety net exactly when risk is highest. Concealing the change from the people who must use it guarantees resistance and poor adoption. Consumption-based cloud costs are real and belong in the transition plan."
    },
    {
      "id": "e3-39",
      "domain": 3,
      "skill": "3.2.3",
      "type": "single",
      "difficulty": "easy",
      "question": "Brightwater Beverages wants to use Amazon Bedrock to analyse its secret product recipes and supplier pricing. The head of research and development asks two questions: will AWS or the model provider use these inputs to train the foundation models, and does using a managed service remove the need for the company's own access controls? Which answer is MOST accurate?",
      "options": [
        "Customer inputs and outputs in Amazon Bedrock are not used to train the underlying foundation models and are not shared with model providers, but Brightwater remains responsible for controlling who inside the company can access the data and the application",
        "AWS uses all customer prompts to improve the models, so recipes should never be sent to any cloud service",
        "Because Amazon Bedrock is a managed service, AWS takes over all access control and the company needs no internal permissions",
        "The data is safe only if Brightwater fine-tunes its own model, because base models always retain prompts"
      ],
      "answer": [0],
      "explanation": "Skill 3.2.3 covers access controls and data security for AI systems. AWS states that customer content processed by Amazon Bedrock, including prompts and outputs, is not used to train the base foundation models and is not shared with third-party model providers, and that data is encrypted in transit and at rest. That addresses the training concern, but the shared responsibility model still places identity, permissions, data classification and application-level controls with the customer. The claim that AWS trains on all prompts is false. A managed service does not take over the customer's internal access decisions. Fine-tuning is unrelated to whether prompts are retained and does not change the responsibility split."
    },
    {
      "id": "e3-40",
      "domain": 4,
      "skill": "4.2.2",
      "type": "single",
      "difficulty": "hard",
      "question": "Brightwater Beverages' demand models would improve dramatically with point-of-sale data from its independent distributors, who are reluctant to share it. Internally, the sales division considers distributor relationships its own and resists giving supply chain access to the data it does receive. Which approach BEST establishes a foundation for AI in this situation?",
      "options": [
        "Define a data strategy that names data owners and stewards, sets internal sharing rules with clear purposes and safeguards, and establishes a data-sharing framework with distributors that specifies permitted uses, protections and mutual benefits such as shared forecasts",
        "Purchase the distributors' data through a broker without their knowledge",
        "Let the sales division keep exclusive control because it owns the relationships",
        "Ask the data science team to scrape distributor websites for sales figures"
      ],
      "answer": [0],
      "explanation": "Skill 4.2.2 describes the importance of data strategies, data ownership and data sharing frameworks as foundations for AI. The blockers are organizational, not technical: unclear internal ownership and no external agreement. A data strategy that assigns ownership and stewardship, sets purpose-bound internal access rules and formalizes external sharing with defined uses, protections and value exchange turns reluctance into a governed flow. Buying the data covertly would damage trust and may breach contracts or law. Leaving one division in exclusive control preserves the silo that is starving the models. Scraping public websites yields unreliable data and sidesteps the relationship the company needs to build."
    },
    {
      "id": "e3-41",
      "domain": 1,
      "skill": "1.2.2",
      "type": "single",
      "difficulty": "medium",
      "question": "Nimbus, a business-to-business human-resources software vendor, is designing an employee-onboarding agent for its customers. The agent must create accounts, order equipment and schedule training by calling several systems, and it must also exchange tasks with agents that customers run in their own IT environments. Which capability is MOST specific to this agent-based design rather than to a conventional chatbot?",
      "options": [
        "Agent-to-agent communication and tool use within an orchestration strategy, allowing the agent to delegate and coordinate multi-step tasks across systems and other agents autonomously",
        "The ability to generate a fluent paragraph of text in response to a question",
        "The use of a large language model hosted in the cloud",
        "The presentation of answers in a chat window"
      ],
      "answer": [0],
      "explanation": "Skill 1.2.2 distinguishes AI agents from other AI solutions and identifies their core capabilities: autonomy, tool use, agent-to-agent communication and orchestration. What makes the onboarding design an agent is that it plans and executes a sequence of actions across tools and coordinates with other agents, including agents outside Nimbus's boundary, a pattern that platforms such as Amazon Bedrock AgentCore are built to support. Generating fluent text is something any chatbot does. Cloud-hosted language models underpin both chatbots and agents, so they are not the differentiator. A chat interface is a presentation choice, not a capability."
    },
    {
      "id": "e3-42",
      "domain": 2,
      "skill": "2.3.1",
      "type": "single",
      "difficulty": "medium",
      "question": "Nimbus surveys its competitive landscape and finds that every rival human-resources software vendor has added a generative AI feature that drafts job descriptions. Customers now list the feature in requests for proposals but do not pay extra for it. Nimbus does not yet offer it. Which assessment is MOST accurate?",
      "options": [
        "Job-description drafting has become table stakes: Nimbus must offer it to avoid losing deals, but it will not create a competitive advantage, so differentiation should be sought elsewhere",
        "Nimbus should skip the feature entirely because features that competitors already have can never be worth building",
        "Nimbus should build the feature and price it at a large premium because it is clearly a differentiator",
        "Nimbus should copy the feature and stop all other AI investment because parity has been achieved"
      ],
      "answer": [0],
      "explanation": "Skill 2.3.1 assesses competitive landscapes to identify AI advantages. When a capability is universal among competitors and customers expect it without paying more, it has become a baseline requirement: necessary to compete, insufficient to win. The strategic response is to close the gap efficiently, perhaps by buying or using a foundation model, while investing differentiation effort where Nimbus has unique data or workflow depth. Skipping a feature customers now require risks disqualification in proposals. Premium pricing for a commoditized feature ignores the evidence that customers will not pay. Stopping further investment after parity leaves the company permanently one step behind."
    },
    {
      "id": "e3-43",
      "domain": 3,
      "skill": "3.1.1",
      "type": "multi",
      "difficulty": "hard",
      "question": "Nimbus wants to improve its AI features by training on employee records from all 2,000 customer tenants combined, including salaries and performance ratings. The customers' contracts promise that each tenant's data is used only to serve that tenant. Which TWO actions BEST apply the privacy dimension of responsible AI to this decision? (Select TWO.)",
      "options": [
        "Do not pool identifiable tenant data for cross-customer training without explicit contractual consent; where improvement is needed, use approaches such as per-tenant adaptation or properly de-identified and aggregated data with documented safeguards",
        "Apply data minimization by limiting any training data to the fields actually needed for the feature and excluding sensitive attributes such as salary and performance ratings unless strictly required",
        "Proceed with pooled training because the data is already inside Nimbus's systems",
        "Rely on the fact that the model's outputs are text, which cannot leak training data",
        "Notify customers after the model has been trained, since consent is not needed for improvements"
      ],
      "answer": [0, 1],
      "explanation": "Skill 3.1.1 applies responsible AI dimensions, here privacy, to a business decision. Privacy means respecting the purpose for which data was collected: contracts limit each tenant's data to serving that tenant, so cross-tenant training on identifiable records breaches that promise unless consent and safeguards are in place, and alternatives such as per-tenant adaptation or de-identified aggregates exist. Data minimization further reduces exposure by excluding sensitive fields that are not needed. Possession of data does not confer the right to use it for new purposes. Text outputs can reproduce training data, so leakage is a real risk. Notification after the fact is not consent and would not cure a contractual breach."
    },
    {
      "id": "e3-44",
      "domain": 4,
      "skill": "4.4.5",
      "type": "single",
      "difficulty": "medium",
      "question": "Nimbus has run its generative AI policy-answering feature as an opt-in beta for 30 customers. Leadership wants to make it generally available to all 2,000 customers next quarter. Which set of requirements MOST accurately reflects the transition from experimental to production-grade?",
      "options": [
        "Defined service levels and support processes, incident and rollback procedures, model and prompt version control, production monitoring for quality and cost, security review and customer-facing documentation of intended use and limitations",
        "A larger marketing launch and a new logo for the feature",
        "Removing the beta label while keeping the same ad hoc support channel the pilot team used",
        "Freezing the model forever so that nothing changes after launch"
      ],
      "answer": [0],
      "explanation": "Skill 4.4.5 addresses the transition of AI initiatives from experimental to production-grade, including governance and operational requirements. A general-availability product serving thousands of customers needs operational scaffolding: service levels, support and incident processes, version control over models and prompts, monitoring of quality and spend, security sign-off, and transparent documentation of what the feature is for and where it falls short. Marketing assets do not make a system production-ready. Keeping the pilot's informal support arrangements is the definition of not transitioning. Freezing the model ignores that production systems must be updated as data, models and risks evolve."
    },
    {
      "id": "e3-45",
      "domain": 1,
      "skill": "1.1.6",
      "type": "single",
      "difficulty": "easy",
      "question": "A large enterprise prospect's request for proposal asks Nimbus: 'Is your organization's AI management system certified against an international standard?' Which standard should Nimbus's answer reference?",
      "options": [
        "ISO/IEC 42001, the certifiable standard specifying requirements for an AI management system",
        "ISO/IEC 23053, which provides a framework and vocabulary for describing AI systems that use machine learning",
        "The NIST AI Risk Management Framework, which issues certificates to compliant companies",
        "The EU AI Act, which certifies vendors' management systems"
      ],
      "answer": [0],
      "explanation": "Skill 1.1.6 covers awareness of global frameworks and unified AI vocabulary. ISO/IEC 42001 specifies requirements for establishing, implementing, maintaining and improving an AI management system, and organizations can be audited and certified against it, which is what the prospect is asking about. ISO/IEC 23053 describes a generic framework and terminology for machine-learning-based AI systems; it is a reference document, not a certifiable management standard. The NIST AI Risk Management Framework is voluntary guidance and does not issue certificates. The EU AI Act is legislation imposing obligations by risk tier, not a management-system certification scheme."
    },
    {
      "id": "e3-46",
      "domain": 2,
      "skill": "2.2.4",
      "type": "single",
      "difficulty": "easy",
      "question": "Nimbus released an AI feature to customers one month ago. Its ultimate goal is higher subscription renewal rates, which will not be known for a year. The product manager wants one early indicator that the feature is on track. Which metric is the BEST leading indicator?",
      "options": [
        "The share of customers who have enabled the feature and used it again within 30 days",
        "The annual renewal rate for the customer base",
        "The total revenue reported in the last audited annual accounts",
        "The number of lines of code written for the feature"
      ],
      "answer": [0],
      "explanation": "Skill 2.2.4 identifies leading indicators that predict AI project success. Activation followed by repeat use within a short window shows that customers find the feature valuable enough to return, which is a strong predictor of later retention and can be measured now. The annual renewal rate is the lagging outcome itself and is not available for a year. Audited annual revenue is backward-looking and reflects many factors beyond the feature. Lines of code measure effort, not value, and say nothing about whether customers benefit."
    },
    {
      "id": "e3-47",
      "domain": 3,
      "skill": "3.2.2",
      "type": "single",
      "difficulty": "hard",
      "question": "Nimbus sells a candidate-screening module that ranks job applicants, and several customers deploy it in the European Union. Nimbus's product lead argues that compliance with the EU AI Act is entirely the customers' problem because the customers make the hiring decisions. Which assessment is MOST accurate?",
      "options": [
        "Recruitment and candidate-screening AI is a high-risk use under the EU AI Act, and as the provider Nimbus carries obligations such as risk management, technical documentation, logging capability and enabling human oversight, while customers have their own obligations as deployers",
        "Nimbus has no obligations because software vendors are outside the scope of the EU AI Act",
        "The module is minimal risk because it only ranks candidates rather than making final decisions",
        "Only customers located in the European Union have obligations, so Nimbus can ignore the Act as a non-EU company"
      ],
      "answer": [0],
      "explanation": "Skill 3.2.2 is about identifying and addressing regulatory compliance risks. The EU AI Act classifies AI used in recruitment and candidate screening as high risk and places distinct obligations on providers, the organizations that develop and place the system on the market, and on deployers who use it. A vendor whose product is used in the EU is a provider with duties including risk management, documentation, logging and designing for human oversight. Vendors are squarely within scope. Ranking applicants shapes hiring outcomes and is explicitly high risk regardless of who clicks the final button. The Act applies to providers placing systems on the EU market wherever the company is based."
    },
    {
      "id": "e3-48",
      "domain": 4,
      "skill": "4.3.6",
      "type": "single",
      "difficulty": "medium",
      "question": "Nimbus introduces a generative AI tool that drafts renewal proposals, usage summaries and follow-up emails for its 60 customer-success managers, work that previously consumed half their week. Leadership must decide how the role should change. Which decision BEST balances human strengths with AI capabilities?",
      "options": [
        "Redefine the role so that managers review and approve AI drafts, and reinvest the freed time in relationship building, understanding customer problems and judgment calls on at-risk accounts",
        "Reduce the team by half and have the remaining managers simply forward AI drafts to customers without reading them",
        "Keep the role unchanged and prohibit use of the tool so that no jobs are affected",
        "Have the AI tool make all renewal pricing decisions and remove managers from customer contact"
      ],
      "answer": [0],
      "explanation": "Skill 4.3.6 is about transitioning roles from manual operations to human oversight and collaboration with AI, balancing human strengths such as empathy, critical thinking and judgment with AI capabilities. The tool is good at producing drafts; humans are better at reading relationships, diagnosing underlying problems and deciding how to handle fragile accounts, so the role should shift toward oversight and higher-value interaction. Halving the team and sending unread drafts removes oversight and risks errors reaching customers. Banning the tool forgoes productivity and leaves the company behind competitors. Letting AI set prices and cut human contact discards exactly the strengths that retain customers."
    },
    {
      "id": "e3-49",
      "domain": 2,
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "medium",
      "question": "Nimbus hosts its own custom attrition-prediction models on Amazon SageMaker AI. The inference endpoints run continuously, with stable, predictable instance usage that has not changed for a year and is expected to continue. Finance wants to lower the cost without changing the architecture. Which option is MOST appropriate?",
      "options": [
        "Commit to a SageMaker AI Savings Plan for a one- or three-year term to receive a discounted rate on the steady instance usage",
        "Move the models to Amazon Bedrock batch inference, which is always cheaper for any workload",
        "Switch the endpoints on and off at random intervals to reduce the hours billed",
        "Buy Provisioned Throughput on Amazon Bedrock, which discounts SageMaker instance usage"
      ],
      "answer": [0],
      "explanation": "Skill 2.2.5 covers cost planning and optimization strategies. Savings Plans for Amazon SageMaker AI offer a discount of up to 64 percent on eligible instance usage in exchange for a one- or three-year hourly spend commitment, and they fit precisely when usage is steady and predictable, as here. Bedrock batch inference applies to foundation model jobs on Bedrock and is for latency-tolerant work; it does not host custom SageMaker models and is not universally cheaper. Randomly stopping endpoints would break a service that must run continuously. Bedrock Provisioned Throughput reserves foundation model capacity on Bedrock and has no effect on SageMaker instance pricing."
    },
    {
      "id": "e3-50",
      "domain": 1,
      "skill": "1.1.2",
      "type": "single",
      "difficulty": "easy",
      "question": "Pelagic Line, a container shipping company, lists four systems in its technology portfolio. A director asks which one is an example of traditional machine learning rather than generative AI or rule-based automation. Which system fits that description?",
      "options": [
        "A model that learns from historical voyage, weather and port data to predict each vessel's arrival time",
        "An assistant that drafts customer emails explaining shipment delays in natural language",
        "A workflow that applies a fixed tariff table to calculate port fees for each container",
        "A tool that generates marketing images of ships for the annual report"
      ],
      "answer": [0],
      "explanation": "Skill 1.1.2 distinguishes AI, machine learning and generative AI. Predicting arrival times by learning patterns from historical data is classic supervised machine learning: it outputs a prediction, not new content. Drafting delay emails in natural language is generative AI, which creates text. Applying a fixed tariff table is rule-based automation with no learning at all. Producing report imagery is generative AI for images. The exam often presents a mixed portfolio and asks the strategist to label each item correctly, because the label determines the governance, cost model and skills required."
    },
    {
      "id": "e3-51",
      "domain": 2,
      "skill": "2.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "Pelagic Line's strategic objective is to cut the average time containers wait at port. Analysis shows the main cause is manual processing of customs declarations and bills of lading, which arrive as scanned PDFs in many formats and are keyed in by clerks. Which AI capability maps MOST directly to the objective?",
      "options": [
        "Intelligent document extraction that reads the scanned shipping documents and pre-populates customs submissions for clerk review",
        "A recommendation engine that suggests additional services to shipping customers",
        "A generative AI tool that writes the company's sustainability report",
        "A computer-vision model that counts containers on the vessel deck"
      ],
      "answer": [0],
      "explanation": "Skill 2.1.1 maps AI capabilities to specific business outcomes. The bottleneck is manual transcription of unstructured documents, so document extraction, which turns scanned PDFs into structured data for submission, attacks the root cause of port dwell time directly. A recommendation engine supports revenue growth, a different objective. Writing a sustainability report saves corporate time but does not move containers faster. Counting containers on deck is a plausible computer-vision use but does not address the paperwork delay that analysis identified. Mapping starts from the diagnosed cause, not from the catalogue of available technologies."
    },
    {
      "id": "e3-52",
      "domain": 3,
      "skill": "3.3.4",
      "type": "single",
      "difficulty": "hard",
      "question": "Pelagic Line's arrival-time prediction model has been reliable for two years. Over the last month, predictions for a specific region drifted badly, and customers missed truck bookings. The model code is unchanged. Engineers find that a satellite position-data provider for that region silently began sending stale positions after a contract change. Which mitigation BEST addresses this class of reliability risk?",
      "options": [
        "Add input data-quality monitoring, such as freshness and completeness checks with alerts, alongside model performance monitoring, so that degraded inputs are caught before they corrupt predictions",
        "Retrain the model on the stale data so it learns to work with it",
        "Accept the issue because the model itself has not changed and therefore cannot be at fault",
        "Replace the model with a larger generative AI model, which is immune to bad input data"
      ],
      "answer": [0],
      "explanation": "Skill 3.3.4 covers risks to AI system reliability, including data quality degradation. A model is only as good as its inputs; when an upstream feed degrades silently, outputs degrade with it even though nothing in the model changed. The right control is to monitor the data pipeline itself, checking freshness, completeness and distribution, and to alert and fall back when checks fail, in addition to tracking prediction accuracy. Retraining on stale data would bake the defect into the model. Declaring the model blameless ignores that reliability is a property of the whole system. No model, however large, can produce accurate predictions from wrong positions."
    },
    {
      "id": "e3-53",
      "domain": 4,
      "skill": "4.4.1",
      "type": "single",
      "difficulty": "medium",
      "question": "Pelagic Line's executives have articulated a compelling AI vision and agreed on priorities and capability gaps with every business unit. A single arrival-time prediction prototype has run in a test environment but has never served real customers. The chief executive now wants to roll AI across all 60 vessels and every port office this year. Using an iterative transformation approach with envision, align, launch and scale phases, what is the MOST appropriate advice?",
      "options": [
        "Complete the launch phase first by taking the prototype into production for a bounded set of routes, proving value and operational readiness, and then scale on that evidence",
        "Proceed straight to enterprise-wide scaling because the vision and alignment work is finished",
        "Return to the envision phase and rewrite the vision before doing anything else",
        "Skip production pilots entirely because prototypes in a test environment are sufficient evidence of value"
      ],
      "answer": [0],
      "explanation": "Skill 4.4.1 applies iterative transformation approaches that progress through phases such as envision, align, launch and scale, as described in the AWS Cloud Adoption Framework. Pelagic has done the envision and align work but has not launched: no pilot has delivered value in production. Scaling before launch means multiplying an unproven solution across the fleet, with no evidence on value, adoption or operational demands. Revisiting the vision is unnecessary because that phase is complete. A test-environment prototype does not demonstrate real-world value or readiness, which is precisely what the launch phase is designed to establish."
    },
    {
      "id": "e3-54",
      "domain": 1,
      "skill": "1.3.2",
      "type": "single",
      "difficulty": "medium",
      "question": "Pelagic Line uses a generative AI assistant to answer questions about incidents recorded in vessel logs. For older vessels, a single voyage log can exceed the model's context window, and even when it fits, each query costs several dollars and takes a long time because the entire log is sent every time. Which approach BEST addresses the constraint?",
      "options": [
        "Retrieve only the log sections relevant to each question, or pre-summarize logs into shorter structured records, so that each prompt stays well within the context window and uses fewer tokens",
        "Instruct the model to read faster so that the long prompt costs less",
        "Always choose the model with the largest context window and send the full log regardless of cost",
        "Split each log across ten unrelated conversations and ask the model to remember all of them"
      ],
      "answer": [0],
      "explanation": "Skill 1.3.2 identifies when token limits and context window constraints affect generative AI performance, cost and latency. Because input tokens are billed on every request and long prompts increase latency and can exceed the window, the business-level fix is to send less: retrieve relevant passages or summarize in advance. A model cannot be told to read faster; tokens processed are what is billed. A larger window makes the input fit but still charges for every token and does nothing for speed or cost. Separate conversations do not share memory, so splitting a log across them breaks the reasoning the assistant needs."
    },
    {
      "id": "e3-55",
      "domain": 2,
      "skill": "2.2.5",
      "type": "multi",
      "difficulty": "medium",
      "question": "Pelagic Line's finance team needs to estimate the monthly cost of a proposed document-extraction and summarization workload on Amazon Bedrock before approving it, and then, once live, to report actual spending by initiative to the steering committee each month. Which TWO practices are MOST appropriate? (Select TWO.)",
      "options": [
        "Use the AWS Pricing Calculator before launch to model expected token volumes and pricing options and produce a cost estimate for the business case",
        "After launch, tag the resources by initiative and use AWS Cost Explorer to track and report actual spend and trends against the estimate",
        "Wait for the first invoice to discover what the workload costs, since estimates are never accurate",
        "Use AWS Cost Explorer before launch to forecast the cost of a workload that does not yet exist",
        "Report only the model's accuracy to the steering committee because cost is a technical detail"
      ],
      "answer": [0, 1],
      "explanation": "Skill 2.2.5 covers cost planning and control, including the AWS tools that support them. The AWS Pricing Calculator is the planning tool: it models a proposed workload from assumptions such as token volumes and pricing modes to produce an estimate for the business case. AWS Cost Explorer is the analysis tool for actual usage; with tagging by initiative it reports real spend and trends, closing the loop against the estimate. Waiting for an invoice is not planning. Cost Explorer reports on existing usage and cannot estimate a workload that has never run. Steering committees fund initiatives on value against cost, so omitting cost undermines governance."
    },
    {
      "id": "e3-56",
      "domain": 3,
      "skill": "3.1.3",
      "type": "multi",
      "difficulty": "hard",
      "question": "Pelagic Line's last two AI projects were delayed for months when maritime labour regulations, data-protection requirements and fairness questions were raised only at the final approval meeting, forcing redesign. The chief operating officer wants governance by design so that this does not recur. Which TWO changes are MOST effective? (Select TWO.)",
      "options": [
        "Add a risk classification and responsible AI screening step at use-case intake, so that regulatory, privacy and fairness requirements are identified and assigned before design begins",
        "Define stage gates with responsible AI criteria that must be met at design review and before launch, with a named owner for each requirement throughout the project",
        "Keep the single final approval meeting but make it longer so that more issues can be found",
        "Remove the legal and compliance teams from projects to reduce delays",
        "Rely on the vendor's assurance that its product is compliant everywhere"
      ],
      "answer": [0, 1],
      "explanation": "Skill 3.1.3 is about identifying when responsible AI practices should be integrated into project planning to achieve governance by design. The failures came from discovering requirements at the end, so the fix is to surface them at the start: an intake screen that classifies risk and assigns regulatory, privacy and fairness requirements, then stage gates that verify them during design and before launch with clear ownership. A longer final meeting still finds problems too late to fix cheaply. Removing legal and compliance eliminates the expertise, not the obligations, and increases risk. Vendor assurances cannot cover Pelagic's own use context, data and jurisdictions."
    },
    {
      "id": "e3-57",
      "domain": 1,
      "skill": "1.2.2",
      "type": "single",
      "difficulty": "easy",
      "question": "Thornfield University is designing an AI system to handle enrolment requests. The architecture uses a supervising agent that interprets each request and delegates work to specialist agents for course prerequisites, timetabling and fee calculation, then assembles the final response. A dean asks what business benefit this orchestration strategy provides over one large, single agent. Which answer is MOST accurate?",
      "options": [
        "Each specialist agent can be scoped, governed, tested and improved independently, while the supervisor coordinates the workflow, which improves reliability and accountability for complex multi-step tasks",
        "Multiple agents are always cheaper because each one uses a smaller amount of electricity",
        "Orchestration eliminates the need for any human oversight of the system",
        "A supervising agent guarantees that the system will never produce an incorrect answer"
      ],
      "answer": [0],
      "explanation": "Skill 1.2.2 includes orchestration strategies as a core agent concept. A supervisor-and-specialist pattern decomposes a complex task so that each agent has a narrow, testable scope and clear tools, and the supervisor sequences and combines their work; this makes failures easier to isolate and ownership easier to assign. Cost depends on model calls and tokens, not on a count of agents, and multiple agents can cost more. No orchestration pattern removes the need for human oversight of consequential decisions such as enrolment. Agents remain probabilistic systems, so no architecture can guarantee error-free output."
    },
    {
      "id": "e3-58",
      "domain": 2,
      "skill": "2.2.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "Thornfield University is launching an AI academic-advising assistant. Its stated objective is to improve first-year student retention and reduce the advising team's administrative load. Which TWO key performance indicators (KPIs) are MOST directly aligned with the stated objective? (Select TWO.)",
      "options": [
        "First-year-to-second-year retention rate for students who engaged with the assistant, compared with a matched baseline cohort",
        "Advisor hours spent on routine scheduling and policy questions per week, measured before and after launch",
        "The number of foundation models evaluated during the procurement process",
        "The assistant's average response length in words",
        "The total count of university web pages indexed by the assistant"
      ],
      "answer": [0, 1],
      "explanation": "Skill 2.2.1 defines KPIs for AI initiatives, covering tangible and intangible benefits tied to objectives. Retention is the strategic outcome, and comparing engaged students with a matched baseline cohort measures it credibly; advisor hours on routine work is the direct measure of administrative load, a tangible productivity benefit. The number of models evaluated describes procurement activity, not results. Response length is an output characteristic with no link to retention or workload. Pages indexed measures system coverage, an input rather than an outcome. KPIs should trace to the objective the initiative was funded to achieve."
    },
    {
      "id": "e3-59",
      "domain": 3,
      "skill": "3.3.3",
      "type": "multi",
      "difficulty": "hard",
      "question": "Thornfield University's generative AI tutoring assistant will be used by students, including some under 18, and will draw on textbooks the library licenses under restrictive terms. Governance is worried about two things: the assistant producing harmful or inappropriate content, and it reproducing substantial copyrighted passages. Which TWO controls BEST manage these risks? (Select TWO.)",
      "options": [
        "Configure guardrails with content filters and denied topics appropriate for a student audience, and log and review flagged interactions",
        "Confirm the licence terms permit use of the textbooks in an AI system, restrict the knowledge base to permitted sources, and instruct and test the assistant to cite and paraphrase rather than reproduce long extracts",
        "Allow the assistant to answer any topic without filters so that students are not restricted",
        "Load every textbook the library holds, regardless of licence, because educational use is always exempt from copyright",
        "Remove all logging so that student conversations can never be reviewed"
      ],
      "answer": [0, 1],
      "explanation": "Skill 3.3.3 is about managing harmful content risks and intellectual property concerns. Content filters and denied topics, such as those available in Amazon Bedrock Guardrails, reduce harmful or inappropriate outputs for a young audience, and reviewing flagged interactions lets the university tune them. On the IP side, the controls are legal and operational: verify licence permissions, limit sources to what is permitted, and design and test the assistant to cite and paraphrase instead of reproducing extracts. Removing filters ignores the duty of care to minors. Assuming blanket educational exemption misstates copyright law and licence contracts. Eliminating logs removes the ability to detect and correct harm."
    },
    {
      "id": "e3-60",
      "domain": 4,
      "skill": "4.2.1",
      "type": "single",
      "difficulty": "hard",
      "question": "Thornfield University wants a model to identify students at risk of leaving. The registrar, learning-management, housing and financial-aid systems each hold relevant data, but each uses a different student identifier, two are run by external providers with no export rights in the contract, and attendance is recorded only on paper in some faculties. Which conclusion should the data-readiness assessment reach?",
      "options": [
        "Data readiness is low primarily because of accessibility and integration barriers; the plan must secure data access rights, establish a common student identifier and digitize key records before a reliable model is feasible",
        "Data readiness is high because a large amount of data exists somewhere in the university",
        "The only problem is model choice; a sufficiently advanced model can reconcile identifiers and missing records on its own",
        "The university should proceed immediately using only the registrar system, since one source is enough for any prediction"
      ],
      "answer": [0],
      "explanation": "Skill 4.2.1 evaluates data readiness in terms of quality, accessibility and the effects of silos. Relevant data exists, but it cannot be joined (no common identifier), cannot be obtained (contracts lack export rights) or does not exist digitally (paper attendance). Those are accessibility and integration gaps that must be closed through contracts, identity management and digitization before modelling makes sense. Volume alone does not equal readiness. No model can invent missing records or reliably reconcile identifiers that were never designed to match. Restricting to one system discards the signals that make the prediction useful and reproduces the silo problem."
    },
    {
      "id": "e3-61",
      "domain": 1,
      "skill": "1.2.3",
      "type": "multi",
      "difficulty": "medium",
      "question": "Thornfield University's student-retention risk model goes live next term. The provost asks what the university must put in place so that declines in the model's usefulness are detected and remediated over time. Which TWO practices are MOST appropriate? (Select TWO.)",
      "options": [
        "Compare the model's predictions with actual student outcomes each term and track accuracy by cohort, so that drift becomes visible",
        "Define in advance the performance thresholds and events, such as a change in admissions policy or course delivery, that trigger review and retraining",
        "Treat the launch accuracy as permanent and stop measuring once the model is live",
        "Retrain the model every day whether or not anything has changed",
        "Delete historical predictions so that past errors cannot be audited"
      ],
      "answer": [0, 1],
      "explanation": "Skill 1.2.3 explains why AI solutions require ongoing monitoring and updates. Comparing predictions with realized outcomes is the only way to see whether the model still reflects the student population; tracking by cohort exposes uneven decline. Pre-agreed thresholds and known trigger events, such as policy changes that alter who enrols, turn monitoring into action. Freezing the launch accuracy as a permanent fact ignores that student behaviour and intake change every year. Daily retraining without cause wastes effort, can introduce instability and is not a substitute for evidence-based triggers. Deleting prediction history removes the audit trail needed to diagnose drift."
    },
    {
      "id": "e3-62",
      "domain": 2,
      "skill": "2.3.3",
      "type": "single",
      "difficulty": "hard",
      "question": "Thornfield University's retention programme, which combines an AI risk model with proactive advising, has lifted first-year retention by six points. Competing universities now plan to buy a similar model from the same vendor. The vice-chancellor asks why Thornfield's advantage should endure. Which explanation is MOST convincing?",
      "options": [
        "The advantage rests on assets rivals cannot buy: a decade of longitudinal student data, an advising process redesigned around the model's outputs, and a feedback loop in which every intervention outcome improves the next model version",
        "The vendor has promised not to sell the model to any other university",
        "The model's algorithm is so advanced that no competitor could understand it",
        "The advantage is permanent because the university acted first"
      ],
      "answer": [0],
      "explanation": "Skill 2.3.3 describes how AI creates sustainable advantage and operational improvement. Models are increasingly available to everyone; durable advantage comes from proprietary data accumulated over time, from workflows and people reorganized to act on predictions, and from a learning loop that compounds improvement with each cycle. A vendor exclusivity promise is fragile and, as the scenario states, not in place. Algorithmic sophistication is replicable and rarely the moat. First-mover status erodes quickly unless it is converted into data, process and learning advantages that competitors cannot simply purchase."
    },
    {
      "id": "e3-63",
      "domain": 3,
      "skill": "3.2.4",
      "type": "single",
      "difficulty": "hard",
      "question": "Thornfield University has adopted the NIST AI Risk Management Framework to structure governance of its student-retention model. The governance office is deciding where the following activity belongs: defining quantitative metrics for prediction accuracy and fairness across student groups, running those tests before launch and tracking them in production. Which core function of the framework does this activity belong to?",
      "options": [
        "Measure",
        "Govern",
        "Map",
        "Manage"
      ],
      "answer": [0],
      "explanation": "Skill 3.2.4 applies risk classification and management frameworks across the AI lifecycle. The NIST AI Risk Management Framework has four core functions. Measure covers the quantitative and qualitative methods used to analyze, assess and track identified risks, which is exactly what defining accuracy and fairness metrics and testing them before and after launch involves. Govern establishes the culture, policies, roles and accountability that cut across everything else. Map sets context, identifies stakeholders, intended uses and potential impacts so that risks can be recognized. Manage allocates resources and acts on measured risks, including response and recovery. The activity described is measurement rather than context-setting, policy or response."
    },
    {
      "id": "e3-64",
      "domain": 4,
      "skill": "4.3.5",
      "type": "multi",
      "difficulty": "easy",
      "question": "Thornfield University wants to build AI literacy across 4,000 academic and administrative staff within a year, so that departments can propose and use AI responsibly. Budget is limited and roles vary widely. Which TWO workforce development approaches are MOST appropriate? (Select TWO.)",
      "options": [
        "A tiered programme: short foundational AI and responsible AI training for everyone, with deeper role-specific tracks for staff who will design or oversee AI use cases",
        "Hands-on learning such as sponsored proof-of-concept projects and hackathons in which departments solve a real problem with the approved tools and share results",
        "A single eight-week data science course that all 4,000 staff must complete regardless of role",
        "No training, on the basis that staff will learn whatever they need from the tools themselves",
        "Training only the IT department, since AI is a technology matter"
      ],
      "answer": [0, 1],
      "explanation": "Skill 4.3.5 determines workforce development approaches that accelerate enterprise-wide AI literacy, including training programmes, proof-of-concept initiatives and hackathons. A tiered design gives everyone a shared baseline, including responsible AI, while concentrating deeper investment where it is needed, which is efficient under a limited budget. Applied, hands-on formats build real skill and surface use cases from the people who know the work. A uniform data science course is both unnecessary for most roles and unaffordable. Leaving staff to self-teach produces uneven, risky usage. Limiting training to IT ignores that the exam's premise is business-led AI adoption."
    },
    {
      "id": "e3-65",
      "domain": 1,
      "skill": "1.3.1",
      "type": "multi",
      "difficulty": "easy",
      "question": "Thornfield University's advising assistant gives answers that are technically accurate but written in dense administrative language that first-year students find confusing, and it sometimes answers questions about the wrong degree programme. Which TWO prompt engineering changes are MOST likely to improve the outputs? (Select TWO.)",
      "options": [
        "Assign the assistant a role and audience in the prompt, such as a friendly advisor explaining to a first-year student, and include an example of the desired tone",
        "Instruct the assistant to ask a clarifying question to confirm the student's degree programme when the request is ambiguous before answering",
        "Remove all instructions from the prompt so the model is not constrained",
        "Increase the temperature setting to maximum so answers are more varied",
        "Tell the assistant to answer every question in a single sentence regardless of complexity"
      ],
      "answer": [0, 1],
      "explanation": "Skill 1.3.1 applies basic prompt engineering principles such as giving a role, audience, examples and clear handling instructions. Specifying the persona and audience, with an example, shifts tone and reading level toward what first-year students need. Directing the assistant to clarify an ambiguous programme before answering prevents confident answers about the wrong course. Removing all instructions discards the guidance that produces fit-for-purpose output. Raising randomness to the maximum makes answers less predictable, not clearer. Forcing one-sentence answers would truncate explanations that genuinely require detail and would not fix the wrong-programme problem."
    }
  ]
});
