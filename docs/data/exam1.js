window.AIB_DATA = window.AIB_DATA || {};
window.AIB_DATA.domains = window.AIB_DATA.domains || {};
window.AIB_DATA.exams = window.AIB_DATA.exams || [];

window.AIB_DATA.exams.push({
  "id": "exam1",
  "title": "Practice Exam 1",
  "durationMinutes": 130,
  "description": "Full-length 65-question paper mirroring AIB-C01 domain weights.",
  "questions": [
    {
      "id": "e1-01",
      "domain": 2,
      "skill": "2.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "An online retailer's top strategic objective for the year is to reduce shopping-cart abandonment. Which AI capability maps MOST directly to that business outcome?",
      "options": [
        "Computer vision to count inventory on warehouse shelves",
        "A personalization and recommendation engine that presents relevant products and offers in real time during the shopping session",
        "Document extraction to process supplier invoices faster",
        "Predictive maintenance for the data center cooling systems"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 2.1.1 is about mapping AI capabilities to specific business outcomes across functions. Cart abandonment is a sales and marketing problem; personalization and recommendation engines directly influence conversion during the session, so they map to the stated outcome. Warehouse computer vision improves inventory accuracy (operations), invoice extraction improves finance efficiency, and predictive maintenance reduces downtime; all are legitimate AI use cases but none addresses why shoppers leave before purchase. The exam rewards starting from the business objective and selecting the capability whose mechanism of value creation connects to it, rather than choosing a technically impressive use case."
    },
    {
      "id": "e1-02",
      "domain": 1,
      "skill": "1.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A logistics company trained a model on three years of historical delivery records. The model is now deployed, and each time a parcel is scanned at a depot it produces an estimated delivery time for the customer app. Which term BEST describes what the model is doing when it produces each estimate?",
      "options": [
        "Training, because the model is processing new delivery records",
        "Inference, because the trained model is being applied to new data to generate a prediction",
        "Feature engineering, because scan events are being converted into model inputs",
        "Labeling, because each scan creates a new tagged data point"
      ],
      "answer": [
        1
      ],
      "explanation": "The correct answer is inference: once a model is trained, using it to produce outputs (predictions) on new, unseen inputs is called inference, and this is what generates recurring usage cost in production. Training is the earlier phase in which the model learns patterns from historical data; it is not happening at each scan. Labeling is the act of attaching known outcomes to data for supervised training, which is not what the app is doing. Feature engineering is a technical preparation step performed by data teams and is explicitly out of scope for the strategist. Skill 1.1.1 tests whether you can place algorithms, models, training, inference and predictions correctly in a business workflow."
    },
    {
      "id": "e1-03",
      "domain": 3,
      "skill": "3.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A bank uses a machine learning model to approve or decline consumer credit applications. Regulators require the bank to tell each declined applicant the main factors behind the decision. Which responsible AI dimension does this requirement MOST directly concern?",
      "options": [
        "Privacy",
        "Robustness",
        "Safety",
        "Explainability"
      ],
      "answer": [
        3
      ],
      "explanation": "Explainability is the ability to understand and describe how a model arrived at a particular output, which is exactly what adverse-action notices demand. Robustness concerns the model performing reliably under unexpected inputs or conditions. Privacy concerns protecting personal data used by or exposed through the system. Safety concerns preventing harmful outputs or behavior. Skill 3.1.1 asks you to apply responsible AI dimensions (fairness, explainability, privacy, security, safety, controllability, veracity and robustness, governance, transparency) to business scenarios; credit decisions are the classic explainability example because regulated, high-impact decisions must be justifiable to individuals."
    },
    {
      "id": "e1-04",
      "domain": 4,
      "skill": "4.1.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A mid-size insurer's AI readiness assessment found strong executive sponsorship and a modern cloud platform, but customer data spread across 14 siloed systems and no AI governance policy. Which TWO gaps should be addressed FIRST to enable successful AI adoption? (Select TWO.)",
      "options": [
        "Purchasing dedicated GPU infrastructure for model training",
        "Launching ten pilots simultaneously to build momentum",
        "A governance framework that defines AI policies, risk classification and accountability",
        "Data accessibility and quality, by integrating or federating the siloed systems",
        "Replacing the executive sponsor with a more technical leader"
      ],
      "answer": [
        2,
        3
      ],
      "explanation": "Skill 4.1.1 assesses readiness across dimensions such as leadership alignment, data quality, cultural preparedness, technical infrastructure and governance. The assessment shows leadership and infrastructure are strengths, so effort should go to the identified weaknesses: fragmented data (the raw material for AI) and missing governance (the guardrails for responsible scaling). Replacing a strong sponsor removes an asset. Buying GPUs addresses infrastructure, which is already adequate, and is unnecessary when managed services exist. Launching many pilots before fixing data and governance multiplies risk and repeats the same obstacles in each. The exam rewards acting on the specific gaps the assessment reveals."
    },
    {
      "id": "e1-05",
      "domain": 2,
      "skill": "2.1.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A regional insurer with no in-house machine learning team needs automated document extraction for claims within three months. Regulation requires that claims data remain in its home region. Which build-buy-partner decision is MOST appropriate?",
      "options": [
        "Postpone the initiative until an internal data science team has been hired and trained",
        "Build a custom extraction model on Amazon SageMaker AI to retain full control",
        "Partner with a university research lab to co-develop a novel extraction algorithm",
        "Buy a managed or marketplace solution that meets the data-residency requirement, which delivers fastest time to value given the skills gap"
      ],
      "answer": [
        3
      ],
      "explanation": "Build-buy-partner decisions weigh budget, timeline, internal capability, vendor options and regulatory constraints. With no ML team, a three-month deadline and a commodity capability (document extraction), buying a managed service or AWS Marketplace solution that satisfies data residency is the fastest, lowest-risk route. Building on SageMaker AI suits differentiated use cases where the organization has skills and time, neither of which applies. A research partnership is open-ended and ill-suited to an operational deadline. Postponing forfeits value and ignores viable options. Skill 2.1.2 expects you to reserve \"build\" for strategic differentiators and favor \"buy\" for commodity needs under time and skill constraints."
    },
    {
      "id": "e1-06",
      "domain": 1,
      "skill": "1.1.2",
      "type": "single",
      "difficulty": "medium",
      "question": "An insurance company is reviewing four vendor proposals and wants to understand which one is an example of generative AI (GenAI) rather than traditional machine learning. Which proposal describes a GenAI solution?",
      "options": [
        "A model that drafts personalized claim-decision letters by reading adjuster notes and policy documents",
        "A model that predicts the probability that a new claim is fraudulent based on historical claim outcomes",
        "A model that groups policyholders into segments based on claims history and demographics",
        "A rules engine that automatically flags any claim above a defined monetary threshold for review"
      ],
      "answer": [
        0
      ],
      "explanation": "Generative AI produces new content (text, images, code) rather than only predicting or classifying, so the solution that drafts letters is the GenAI example. Fraud-probability prediction is classic supervised machine learning (predicting a label from historical patterns). Segmenting policyholders is unsupervised ML (clustering), which discovers structure in data but does not create content. A threshold-based rules engine is deterministic automation, not AI at all. Skill 1.1.2 asks you to distinguish AI, ML and GenAI: AI is the broad field, ML learns patterns from data to predict, and GenAI is a subset of ML (built on foundation models) that generates novel outputs."
    },
    {
      "id": "e1-07",
      "domain": 2,
      "skill": "2.1.2",
      "type": "multi",
      "difficulty": "hard",
      "question": "A bank is evaluating a vendor's GenAI underwriting assistant as part of a build-buy-partner analysis. Which TWO factors are MOST important for the decision? (Select TWO.)",
      "options": [
        "Whether the vendor can meet the bank's regulatory, model-risk and data-handling requirements for lending decisions",
        "How quickly the vendor's sales team responded to the request for proposal",
        "Whether the vendor's demo used the most recently released foundation model",
        "Whether underwriting judgment is a differentiating core capability that justifies building in-house versus buying a commodity product",
        "Whether the vendor offers the lowest list price, regardless of total cost of ownership"
      ],
      "answer": [
        0,
        3
      ],
      "explanation": "Two considerations dominate a build-buy-partner decision in a regulated domain. First, compliance fit: lending decisions are high-risk under most AI regulations, so the vendor must support model-risk management, explainability and data protection. Second, strategic differentiation: if underwriting insight is a source of competitive advantage, buying a generic product may cede that advantage, tipping the decision toward build or partner. Which model version a demo used is a transient technical detail. Sales responsiveness is not a decision criterion. Lowest list price ignores integration, change management and ongoing inference cost. Skill 2.1.2 tests weighing compliance, capability and strategic value, not surface attributes."
    },
    {
      "id": "e1-08",
      "domain": 3,
      "skill": "3.1.1",
      "type": "single",
      "difficulty": "hard",
      "question": "A retailer deploying a GenAI shopping assistant plans to publish a document describing the assistant's intended uses, known limitations, the kinds of data it was built with and the situations in which it should not be relied on. Which responsible AI dimension does this action MOST directly address?",
      "options": [
        "Explainability",
        "Robustness",
        "Transparency",
        "Privacy"
      ],
      "answer": [
        2
      ],
      "explanation": "Transparency is about giving stakeholders the information they need to make informed decisions about engaging with an AI system: what it is for, how it was built, its limitations and appropriate use. Publishing a model or service card is a transparency practice. Explainability is different: it concerns understanding why a specific output or decision was produced. Privacy concerns protection of personal data, and robustness concerns reliable performance under varied conditions. Skill 3.1.1 frequently tests the transparency-versus-explainability distinction: transparency is disclosure about the system as a whole, explainability is insight into individual outputs."
    },
    {
      "id": "e1-09",
      "domain": 4,
      "skill": "4.1.2",
      "type": "single",
      "difficulty": "easy",
      "question": "A retailer has a dozen AI pilots running in different departments. Each team chose its own tools, there is no shared platform or data foundation, and no enterprise-level metrics exist. Using a typical AI maturity model, which stage BEST describes the retailer?",
      "options": [
        "Pre-adoption: no AI activity has started",
        "Experimentation: scattered pilots without enterprise coordination, platform or metrics",
        "AI-native transformation: the business model is built around AI capabilities",
        "Enterprise-scale deployment: AI embedded across functions with shared platforms"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 4.1.2 asks you to apply maturity models to locate an enterprise on its AI journey. Multiple uncoordinated pilots, tool proliferation, no shared data foundation and no enterprise metrics are the hallmarks of the experimentation stage. Enterprise-scale deployment implies shared platforms, governance and measured outcomes across the organization, none of which exist here. AI-native transformation describes organizations whose products and operating model depend on AI, far beyond this retailer. Pre-adoption is wrong because pilots are clearly under way. Correct placement matters because the right next investments (platform, governance, prioritization) differ by stage."
    },
    {
      "id": "e1-10",
      "domain": 1,
      "skill": "1.1.2",
      "type": "single",
      "difficulty": "hard",
      "question": "During a strategy workshop, a board member states: \"We already use AI because our ERP system runs automated reorder rules. Generative AI is just a marketing term for the same thing.\" Which response MOST accurately corrects this view?",
      "options": [
        "Reorder rules are a form of AI because they make decisions without human involvement, so the board member is correct",
        "GenAI has replaced traditional machine learning, so predictive models are no longer relevant to the business",
        "Machine learning and GenAI are the same technology, but GenAI runs on larger servers and is therefore more expensive",
        "Reorder rules are deterministic automation written by people; machine learning learns patterns from data to make predictions, and GenAI is a subset of ML that uses foundation models to create new content"
      ],
      "answer": [
        3
      ],
      "explanation": "The accurate correction separates three ideas: rule-based automation executes logic humans wrote and cannot learn; machine learning derives its logic from data and improves with more data; and GenAI is a subset of ML (deep learning on foundation models) that generates new content rather than only predicting. Saying rules equal AI is wrong because automation without learning is not AI in the sense the exam uses. Saying ML and GenAI differ only in hardware misses the capability difference (prediction versus generation). Saying GenAI replaced predictive ML is wrong: forecasting, fraud detection and churn models remain traditional ML. Skill 1.1.2 (distinguish AI, ML and GenAI) is often tested through an executive misconception like this."
    },
    {
      "id": "e1-11",
      "domain": 2,
      "skill": "2.1.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A CIO is reviewing the AI portfolio. One initiative has strong technical results, but no business unit has agreed to own it and its value hypothesis has never been written down. Which portfolio decision is MOST appropriate for this initiative?",
      "options": [
        "Terminate it immediately because any initiative without an owner has failed",
        "Pause it until a business owner is assigned and a measurable value hypothesis is defined, then re-evaluate",
        "Scale it immediately because the technical results prove it works",
        "Transfer its budget to the initiative with the most executive enthusiasm"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 2.1.3 asks you to decide whether to scale, pause or terminate based on business value, feasibility, sustainability and strategic alignment. Technical success without an accountable owner or a value hypothesis means the business-value and alignment criteria are unknown, not failed, so pausing to establish ownership and a measurable hypothesis is the disciplined move. Scaling on technical merit alone leads to orphaned systems with no adoption. Terminating discards potentially valuable work before the key questions have been asked. Reallocating on enthusiasm substitutes opinion for the prioritization framework. The exam consistently favors evidence-based portfolio governance over either blind scaling or reflexive cancellation."
    },
    {
      "id": "e1-12",
      "domain": 3,
      "skill": "3.1.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A retailer's marketing team wants to use GenAI to create hyper-personalized offers by inferring customers' likely health conditions from purchase history. Early tests show a large uplift in response rates. The legal team raises privacy and fairness concerns. Which course of action BEST navigates the tradeoff?",
      "options": [
        "Cancel all personalization initiatives to eliminate the privacy risk entirely",
        "Let the marketing team make the final call because it owns the revenue target",
        "Proceed with personalization but limit it to data customers have consented to and exclude inferred sensitive attributes such as health, accepting a smaller uplift",
        "Proceed with the full approach because the measured revenue uplift outweighs the legal team's concerns"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 3.1.2 is about navigating tradeoffs when business objectives conflict with responsible AI principles. The best answer preserves most of the business value while removing the practice that violates privacy expectations and risks discriminatory treatment: inferring sensitive health attributes without consent. Proceeding in full places short-term revenue above privacy, fairness and likely regulatory exposure, which creates reputational and legal risk. Cancelling all personalization is an overcorrection that sacrifices legitimate value. Leaving the decision to the revenue owner alone removes the cross-functional check that governance requires. The exam rewards options that find a principled middle path rather than either extreme."
    },
    {
      "id": "e1-13",
      "domain": 4,
      "skill": "4.1.4",
      "type": "single",
      "difficulty": "hard",
      "question": "An organization assessed at the experimentation stage of AI maturity wants to invest its entire AI budget in an enterprise-wide agentic automation platform. Which recommendation BEST reflects a sound progression pathway?",
      "options": [
        "Outsource the entire AI program to a vendor so maturity becomes the vendor's problem",
        "Stop all AI investment until the organization reaches a higher maturity level on its own",
        "Invest first in foundational capabilities such as data integration, governance and skills, while scaling a small number of proven use cases, and build toward agentic automation as maturity grows",
        "Proceed with the enterprise agentic platform, since ambitious investment accelerates maturity"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 4.1.4 is about prioritizing development investments and creating progression pathways based on strategic objectives and current maturity. Agentic systems demand mature data, governance, monitoring and skills; deploying them enterprise-wide from an experimentation stage skips the foundations they depend on and invites costly failure. A pathway that funds foundations and scales a few validated use cases creates the capabilities and credibility needed for later agentic investment. Halting investment makes no progress toward the objective. Outsourcing wholesale does not build internal maturity and leaves the organization dependent. The exam rewards sequencing investments to maturity rather than leaping stages."
    },
    {
      "id": "e1-14",
      "domain": 2,
      "skill": "2.1.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A manufacturer's GenAI pilot for drafting technical documentation exceeds its accuracy target, but the cost per document is 40 percent higher than the current manual process and the team sees no clear path to reduce it. Leadership must decide what to do next. Which decision is MOST appropriate?",
      "options": [
        "Scale the solution across all plants because it meets the accuracy target",
        "Expand the pilot to more document types to spread the fixed costs",
        "Terminate the initiative immediately without further analysis",
        "Pause scaling and re-examine the cost model, for example through a smaller model, batch processing or narrower scope, before committing further investment"
      ],
      "answer": [
        3
      ],
      "explanation": "Prioritization in Skill 2.1.3 includes sustainability: an initiative that cannot be run at an acceptable cost does not create business value no matter how accurate it is. The appropriate response is to pause and rework the economics, since cost levers such as smaller or cheaper models, batch inference and tighter scope are often available. Scaling on accuracy alone would scale a loss. Terminating without analysis forfeits learning and possibly recoverable value. Expanding scope increases total spend without fixing unit economics. The exam frames scale, pause or terminate as a judgment across value, feasibility, sustainability and alignment rather than a single metric."
    },
    {
      "id": "e1-15",
      "domain": 1,
      "skill": "1.1.3",
      "type": "multi",
      "difficulty": "easy",
      "question": "A retail bank is cataloging the data it could use for AI initiatives. Which TWO of the following are examples of unstructured data? (Select TWO.)",
      "options": [
        "Transaction rows stored in the core banking ledger",
        "Recorded audio from customer calls to the contact center",
        "Customer age, income and account-balance fields in the CRM",
        "A table of loan applications with credit scores and approval status",
        "Free-text complaint emails submitted through the website"
      ],
      "answer": [
        1,
        4
      ],
      "explanation": "Unstructured data has no predefined schema or fixed fields: audio recordings and free-text emails are classic examples and are the natural home of GenAI, speech recognition and natural language processing. Ledger transaction rows, customer attribute fields and a loan-application table are all structured data organized in rows and columns, which is the typical input for traditional predictive ML (fraud scoring, churn, credit risk). Skill 1.1.3 tests whether you can classify data types and understand why it matters: structured data suits classic ML and BI, while unstructured data unlocks GenAI, computer vision and document extraction use cases, and usually needs different tooling and governance."
    },
    {
      "id": "e1-16",
      "domain": 3,
      "skill": "3.1.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A product manager proposes adding a \"responsible AI review\" as the final gate before a new AI feature launches. A governance lead objects. Which position reflects the governance lead's BEST argument?",
      "options": [
        "A final gate is sufficient because responsible AI is primarily a legal sign-off",
        "Responsible AI considerations should be integrated from use-case definition and planning onward (governance by design), because issues found at a final gate are costly to fix and often lead to launch pressure overriding them",
        "Responsible AI review is only necessary for systems that the EU AI Act classifies as high risk",
        "Responsible AI review should happen only after the first incident so that the team has concrete problems to address"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 3.1.3 asks when responsible AI practices should be integrated into project planning; the answer is early and throughout, which is the principle of governance by design. Decisions about data sources, target users, fairness criteria and human oversight shape the system from the start; discovering problems at a final gate forces expensive rework or, more often, pressured acceptance. Treating responsible AI as legal sign-off ignores its design and operational dimensions. Waiting for an incident is reactive and exposes customers to harm. Limiting review to high-risk systems ignores that lower-risk systems still need proportionate consideration of fairness, transparency and safety."
    },
    {
      "id": "e1-17",
      "domain": 2,
      "skill": "2.1.4",
      "type": "single",
      "difficulty": "medium",
      "question": "A 60-person company receives about 200 support tickets a month and wants to train a machine learning model to route tickets to the correct team. Tickets already arrive through a web form with a category drop-down that most customers complete. What should the strategist recommend?",
      "options": [
        "Purchase a GenAI assistant to read each ticket and decide the routing",
        "Fine-tune a foundation model on the 200 monthly tickets to maximize accuracy",
        "Proceed with the ML model because routing is a classic machine learning use case",
        "Use the existing category field with simple routing rules, because the problem is already mostly solved and the data volume is too small to justify ML"
      ],
      "answer": [
        3
      ],
      "explanation": "Skill 2.1.4 tests recognizing when AI is not the appropriate solution. Here a deterministic, low-cost solution already exists (the category field plus rules), the problem is low-complexity, and 200 tickets a month is too little data to train or justify a model. The fact that routing is often an ML use case does not make it right for this company. A GenAI assistant adds recurring cost and probabilistic errors to a problem that rules solve exactly. Fine-tuning on such a small volume is both unnecessary and unlikely to generalize. The exam rewards choosing the simplest effective solution and revisiting AI only when complexity or volume warrants it."
    },
    {
      "id": "e1-18",
      "domain": 4,
      "skill": "4.2.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A hospital group wants to build a model that predicts patient flow across its five hospitals. Each hospital runs a different electronic health record configuration with different coding conventions, and data cannot be easily combined. What should the strategist conclude about data readiness?",
      "options": [
        "Data silos and inconsistent definitions will limit the model's effectiveness, so the group should assess data quality and accessibility and invest in integration and common definitions before or alongside model development",
        "Build five separate models, one for each hospital, so that integration is unnecessary",
        "Data readiness is not relevant because modern foundation models can work with any data",
        "Purchase an external patient-flow data set instead of using the hospitals' own data"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 4.2.1 evaluates data readiness, including quality, accessibility and the effects of silos. A cross-hospital model needs consistent, accessible data; incompatible coding and isolated systems degrade accuracy and prevent system-wide insight, so integration and shared definitions are prerequisites. Five separate models forfeit the network-wide view that is the point of the initiative and multiply maintenance. Foundation models do not eliminate the need for consistent, high-quality operational data, especially for predictive use cases. External data cannot describe the group's own patient flow. The exam expects data readiness to be assessed and remediated as a foundation, not assumed."
    },
    {
      "id": "e1-19",
      "domain": 1,
      "skill": "1.1.4",
      "type": "single",
      "difficulty": "medium",
      "question": "A manufacturer's predictive maintenance model achieved strong accuracy during a pilot at its newest plant. When rolled out to older plants, failure predictions became unreliable. Investigation shows that sensor logs at the older plants have 30 percent missing readings and inconsistent measurement units. Which conclusion should the strategist draw?",
      "options": [
        "The model is too small; procure a larger foundation model to compensate for the missing data",
        "Data quality is driving the poor outcome; remediate completeness and consistency of the sensor data before expecting the model to perform",
        "Switching from a predictive model to a generative AI model will resolve the inconsistencies",
        "Predictive maintenance is not suited to older plants, so the initiative should be terminated"
      ],
      "answer": [
        1
      ],
      "explanation": "AI outcomes are bounded by the quality of the data the model learns from and is fed in production (\"garbage in, garbage out\"). Missing values and inconsistent units mean the production inputs no longer resemble the pilot data, so fixing completeness, consistency and standardization is the correct first move. A larger model cannot recover information that was never captured. Terminating the initiative ignores a fixable root cause and a proven pilot. Switching to GenAI confuses solution types: generation does not fix unreliable sensor inputs. Skill 1.1.4 (why data quality matters for AI outcomes) is frequently tested through a pilot-to-rollout performance gap like this one."
    },
    {
      "id": "e1-20",
      "domain": 3,
      "skill": "3.1.4",
      "type": "multi",
      "difficulty": "medium",
      "question": "A telecom company will let a GenAI assistant handle billing disputes with customers. Which TWO safeguards are MOST appropriate to ensure adequate human oversight and reliability? (Select TWO.)",
      "options": [
        "Allow the assistant to issue credits of any size to resolve disputes quickly",
        "Apply guardrails, such as Amazon Bedrock Guardrails with contextual grounding checks and denied topics, to filter hallucinated or off-topic responses",
        "Disable conversation logging so that customer data is never stored",
        "Remove all human agents from the billing team to maximize cost savings",
        "Define escalation criteria that route cases to a human agent, for example when a credit exceeds a set amount or the customer expresses distress"
      ],
      "answer": [
        1,
        4
      ],
      "explanation": "Skill 3.1.4 covers recognizing when AI systems need human oversight and identifying safeguards such as hallucination detection, guardrails and escalation criteria. Clear escalation thresholds (financial impact, customer distress, uncertainty) keep consequential decisions with humans. Guardrails that check grounding and block off-topic content reduce hallucinated or inappropriate responses before they reach customers. Removing all human agents eliminates the oversight the scenario calls for. Unlimited credit authority gives the system excessive agency with financial exposure. Disabling logging removes the audit trail needed to monitor, investigate and improve the system; privacy is better handled through retention policies and sensitive-data masking."
    },
    {
      "id": "e1-21",
      "domain": 2,
      "skill": "2.1.5",
      "type": "multi",
      "difficulty": "medium",
      "question": "A logistics company is migrating its route-optimization capability from one AI vendor's platform to another. Which TWO considerations are MOST important to protect business continuity during the transition? (Select TWO.)",
      "options": [
        "Skip baseline comparison because the new platform's vendor has published better benchmark results",
        "Run the two platforms in parallel for a defined period and agree rollback criteria before the cutover",
        "Schedule the cutover on the busiest shipping day of the year to test the new platform under maximum load",
        "Assess data readiness and migration effort, and compare the new platform's performance against the established baseline before switching",
        "Cancel the incumbent vendor contract immediately to avoid paying for two platforms"
      ],
      "answer": [
        1,
        3
      ],
      "explanation": "Skill 2.1.5 covers key considerations when transitioning between AI platforms: business continuity, cost implications, data readiness and performance impact. Parallel running with explicit rollback criteria protects operations if the new platform underperforms. Evaluating data migration and comparing against the existing baseline confirms the new system actually meets requirements before dependence shifts. Cutting over on peak day maximizes the blast radius of any problem. Cancelling the incumbent before the new platform is proven removes the safety net. Vendor benchmarks do not substitute for performance on the company's own data. The exam expects strategists to manage transitions as controlled risk events, not simple switches."
    },
    {
      "id": "e1-22",
      "domain": 4,
      "skill": "4.2.2",
      "type": "single",
      "difficulty": "medium",
      "question": "In a diversified conglomerate, business units refuse to share customer data for a group-wide AI initiative, each citing unclear rules about who owns the data and who is accountable if it is misused. Which action BEST addresses the root cause?",
      "options": [
        "Buy third-party data so that internal sharing is no longer necessary",
        "Abandon group-wide AI initiatives and let each unit pursue AI independently",
        "Direct central IT to copy all business unit data into one repository without consulting the units",
        "Establish an enterprise data strategy that defines data ownership and stewardship roles and a data-sharing framework with clear accountability and usage rules"
      ],
      "answer": [
        3
      ],
      "explanation": "Skill 4.2.2 covers the importance of data strategies, data ownership and data-sharing frameworks as the foundation for AI. The units' objection is about ownership and accountability, so the remedy is a strategy that names owners and stewards, defines permitted uses and sets the governance for sharing; this creates the trust needed to collaborate. Forcibly centralizing data ignores the accountability concern and breeds resistance. External data does not unlock the value of the group's own customer insight. Abandoning enterprise initiatives forfeits the cross-unit value and entrenches silos. The exam treats data ownership clarity as a leadership and governance problem, not a technical one."
    },
    {
      "id": "e1-23",
      "domain": 1,
      "skill": "1.1.5",
      "type": "single",
      "difficulty": "medium",
      "question": "A telecom operator is training a customer-churn model on five years of historical subscriber data. The product manager asks why the data science team deliberately withholds 20 percent of the historical records from training. What is the BEST business explanation?",
      "options": [
        "Withholding data reduces cloud training cost, which is the primary driver of the decision",
        "Privacy regulation requires that a fixed portion of customer data is never processed by a model",
        "The withheld data is used to test how well the model predicts outcomes it has not seen, which indicates how it will perform on future customers",
        "The withheld records will be used as the production data for live inference after launch"
      ],
      "answer": [
        2
      ],
      "explanation": "Models are trained on historical examples with known outcomes and then evaluated on held-out data to estimate how well they generalize. If a model only performs well on data it has already seen, it has overfit and will disappoint in production. Cost reduction is a side effect, not the purpose. Privacy law does not mandate a fixed holdout percentage. Production inference uses new, live data, not a slice of the historical training set. Skill 1.1.5 (concepts related to training on historical data) expects strategists to understand training versus evaluation data, generalization and overfitting at a conceptual level, so they can ask the right questions about reported accuracy."
    },
    {
      "id": "e1-24",
      "domain": 2,
      "skill": "2.2.1",
      "type": "multi",
      "difficulty": "easy",
      "question": "A hospital is defining KPIs for an AI-powered appointment-scheduling assistant. Which TWO of the following are INTANGIBLE benefits? (Select TWO.)",
      "options": [
        "Reduction in overtime pay for scheduling staff",
        "Reduction in third-party scheduling software license fees",
        "Increase in appointment revenue from fewer no-shows",
        "Improvement in patient satisfaction scores",
        "Improvement in scheduling staff morale and perceived productivity"
      ],
      "answer": [
        3,
        4
      ],
      "explanation": "Skill 2.2.1 requires distinguishing tangible benefits, which translate directly into money (cost reduction, revenue growth), from intangible benefits such as customer satisfaction, employee experience and productivity perception that are real but harder to monetize. Patient satisfaction and staff morale are intangible. Overtime reduction, additional revenue and license savings are all tangible financial outcomes. A complete KPI set for an AI initiative includes both types, with proxies defined for the intangible ones (for example, satisfaction surveys), so that the business case is not limited to what is easiest to count."
    },
    {
      "id": "e1-25",
      "domain": 3,
      "skill": "3.1.4",
      "type": "single",
      "difficulty": "hard",
      "question": "An HR department wants to use a GenAI tool to screen job applications and automatically reject candidates who do not appear to meet requirements, with no human involvement. The company recruits across the European Union. What is the MOST appropriate position for the strategist to take?",
      "options": [
        "Allow fully automated rejection as long as content guardrails are applied to the tool's outputs",
        "Keep a human in the loop: let the tool summarize and rank applications, but require a recruiter to make any rejection decision, because employment screening is a high-impact, regulated decision",
        "Allow fully automated rejection but review a monthly sample of rejected applications for errors",
        "Prohibit any use of AI in recruiting to avoid regulatory exposure"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 3.1.4 asks you to recognize when human oversight is required. Hiring decisions are consequential for individuals and are explicitly treated as high-risk under the EU AI Act, which mandates human oversight, documentation and risk management. Using AI to assist (summarize, rank, surface) while a human decides preserves efficiency and satisfies oversight expectations. Monthly sampling is retrospective; harm to wrongly rejected candidates has already occurred. Content guardrails address harmful or off-topic outputs, not the fairness or legality of automated decisions. A total prohibition forgoes legitimate productivity gains and is not required by regulation. The exam favors proportionate oversight over both full automation and blanket bans."
    },
    {
      "id": "e1-26",
      "domain": 4,
      "skill": "4.2.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A manufacturer with primarily on-premises legacy infrastructure wants to launch several GenAI use cases over the next year. Leadership is debating whether to buy GPU servers first. Which assessment approach is MOST appropriate?",
      "options": [
        "Treat infrastructure as irrelevant, since AI success depends only on data and use-case selection",
        "Assess whether managed cloud AI services (for example, Amazon Bedrock) meet the use-case requirements before buying hardware, weighing scalability, time to value, cost model and available skills",
        "Keep everything on-premises because AI workloads cannot run securely in the cloud",
        "Buy GPU servers first, because GenAI always requires owning dedicated accelerators"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 4.2.3 is assessing foundational technology and infrastructure requirements for AI. For most organizations starting GenAI, managed services that provide foundation models on a consumption basis remove the need for capital-intensive GPU purchases, scale with demand and require fewer specialist skills; the assessment should test fit, cost model, integration with existing systems and security needs before committing capital. Assuming GenAI requires owned GPUs is false for the majority of use cases. Claiming cloud AI cannot be secure contradicts the shared responsibility model and widespread regulated-industry adoption. Ignoring infrastructure overlooks integration, security and scalability needs."
    },
    {
      "id": "e1-27",
      "domain": 1,
      "skill": "1.1.6",
      "type": "single",
      "difficulty": "medium",
      "question": "A global pharmaceutical company wants two things: a certifiable management system for governing AI across all subsidiaries, and a common vocabulary that technical and business teams can use to describe machine learning systems consistently. Which pairing of international standards BEST meets these needs?",
      "options": [
        "ISO/IEC 23053 for the certifiable AI management system, and ISO/IEC 42001 for the ML system framework and vocabulary",
        "The NIST AI Risk Management Framework for certification, and the EU AI Act for vocabulary",
        "ISO/IEC 42001 for the certifiable AI management system, and ISO/IEC 23053 for the ML system framework and vocabulary",
        "ISO/IEC 42001 for both needs, because it defines all AI terminology and lifecycle stages"
      ],
      "answer": [
        2
      ],
      "explanation": "ISO/IEC 42001 is the AI management system standard (AIMS): it specifies organizational requirements for policies, roles, risk assessment and continual improvement and can be certified by accredited auditors, much like ISO/IEC 27001 for information security. ISO/IEC 23053 is a descriptive framework for AI systems using machine learning that supplies shared terminology and a conceptual lifecycle model; it is not certifiable. Reversing them is therefore wrong. NIST AI RMF is a voluntary framework with no certification, and the EU AI Act is a regulation, not a vocabulary standard. Skill 1.1.6 tests awareness of these global frameworks and the distinction between a management standard and a conceptual framework."
    },
    {
      "id": "e1-28",
      "domain": 2,
      "skill": "2.2.2",
      "type": "single",
      "difficulty": "easy",
      "question": "Three months after launching a GenAI chatbot, a retailer's customer-service lead claims it reduced average handle time by 30 percent. The CFO challenges the claim because no one can show what handle time was before launch. What should have been done to support the claim?",
      "options": [
        "Establish baseline metrics for handle time before the chatbot was implemented",
        "Run the chatbot with a different foundation model and compare the two",
        "Compare current handle time to published industry averages",
        "Survey agents after launch about whether they feel faster"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 2.2.2 is explicit: baseline metrics must be captured before implementing an AI solution so the effect of adoption can be measured accurately. Without a pre-launch baseline, a claimed 30 percent improvement cannot be verified. Industry averages reflect other companies' processes and do not isolate this chatbot's effect. Post-launch perception surveys are subjective and still lack a reference point. Comparing two models measures relative model performance, not business impact versus the prior process. The exam frequently tests this by presenting an unverifiable success claim and asking what was missing; the answer is almost always the baseline."
    },
    {
      "id": "e1-29",
      "domain": 3,
      "skill": "3.2.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A manufacturer is forming an AI governance body to oversee its growing portfolio of AI initiatives. Which TWO design principles are MOST important for the body to be effective? (Select TWO.)",
      "options": [
        "Rotate the chair every week so that no single function dominates",
        "Assign clear accountability, including a named executive owner for each AI system and documented decision rights",
        "Include cross-functional representation, such as legal, compliance, security, data and technology, HR and business-line leaders",
        "Limit membership to data scientists because they understand the models best",
        "Delegate all governance decisions to the AI platform vendor"
      ],
      "answer": [
        1,
        2
      ],
      "explanation": "Skill 3.2.1 specifies governance structures with appropriate cross-functional representation and clear accountability. Cross-functional membership ensures legal, ethical, security, workforce and business perspectives are all weighed, which no single discipline can provide. Clear accountability, including named owners and decision rights, is what turns a committee into a governance mechanism that can approve, pause or stop initiatives. A data-scientist-only body lacks the legal, business and risk perspectives governance exists to supply. Weekly chair rotation undermines continuity and accountability. Delegating governance to a vendor abdicates responsibility that remains with the organization under the shared responsibility model."
    },
    {
      "id": "e1-30",
      "domain": 4,
      "skill": "4.3.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A bank's AI program is losing momentum. The CIO is the only executive sponsor, business-unit leaders view AI as an IT project, and pilots struggle to find users. Which leadership intervention is MOST likely to restore momentum?",
      "options": [
        "Hire additional data scientists to improve the technical quality of the pilots",
        "Issue a mandate requiring every business unit to adopt at least two AI tools this quarter",
        "Secure sponsorship from business-line executives and empower named AI champions within each unit to drive adoption and connect initiatives to business goals",
        "Increase the technology budget so the IT team can build more pilots"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 4.3.1 is establishing executive sponsorship and leadership alignment and empowering AI champions to sustain momentum. When AI is perceived as an IT initiative, business leaders do not own outcomes and adoption stalls; broadening sponsorship to business executives and empowering champions inside units aligns incentives and creates local advocates. More technology budget produces more unused pilots. Mandates generate compliance without commitment and often resentment. Additional data scientists improve technical quality, which is not the problem; the pilots lack business pull. The exam consistently locates stalled adoption in leadership alignment and ownership rather than in technology."
    },
    {
      "id": "e1-31",
      "domain": 2,
      "skill": "2.2.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A bank's GenAI document-processing initiative costs 400,000 dollars per year in total (licenses, cloud usage, support and change management). It saves 12,000 staff hours per year valued at 50 dollars per hour and avoids 100,000 dollars per year in error-related penalties. What is the annual ROI?",
      "options": [
        "175 percent",
        "50 percent",
        "43 percent",
        "75 percent"
      ],
      "answer": [
        3
      ],
      "explanation": "Skill 2.2.3 tests calculating ROI with a comprehensive framework that includes time savings, cost reduction and other benefits. Total annual benefit is 12,000 hours multiplied by 50 dollars (600,000 dollars) plus 100,000 dollars of avoided penalties, giving 700,000 dollars. ROI equals (benefit minus cost) divided by cost: (700,000 minus 400,000) divided by 400,000 equals 0.75, or 75 percent. The 175 percent figure is the benefit-to-cost ratio, not ROI. The 50 percent figure ignores the avoided penalties. The 43 percent figure divides the net gain by the benefit instead of the cost. Strategists should be able to perform and sanity-check this arithmetic in business case reviews."
    },
    {
      "id": "e1-32",
      "domain": 1,
      "skill": "1.2.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A payroll software company must apply statutory tax-withholding tables to every employee paycheck. The rules are published by the government, change on fixed dates, and every calculation must be reproducible for audit. Which approach is MOST appropriate?",
      "options": [
        "A generative AI assistant that reads the tax tables and writes each withholding amount",
        "Rule-based automation, because the logic is deterministic, fully known and must be exactly reproducible",
        "A machine learning model trained on past paychecks to predict the correct withholding",
        "An AI agent that autonomously decides the withholding and files the return"
      ],
      "answer": [
        1
      ],
      "explanation": "When the decision logic is fully specified, stable and must produce identical, auditable results every time, rule-based automation is the right choice; AI adds cost, probabilistic error and explainability burden without benefit. A GenAI assistant could hallucinate figures and cannot guarantee reproducibility. A predictive ML model would learn approximations of rules that are already known exactly, introducing error where none is acceptable. An autonomous agent adds unnecessary risk to a deterministic compliance task. Skill 1.2.1 (when to use rule-based automation versus AI) rewards recognizing that AI suits ambiguous, pattern-rich or unstructured problems, not codified calculations."
    },
    {
      "id": "e1-33",
      "domain": 3,
      "skill": "3.2.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A European bank plans to use an AI system to assess the creditworthiness of individuals applying for loans. Under the EU AI Act, how should the bank expect this system to be treated?",
      "options": [
        "As a minimal-risk system with no specific legal obligations",
        "As an unacceptable-risk system that is prohibited outright",
        "As a high-risk AI system, requiring a conformity assessment, risk management, data governance, documentation and human oversight",
        "As a limited-risk system with only an obligation to tell users they are interacting with AI"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 3.2.2 covers identifying regulatory compliance risks for AI-enabled business processes. The EU AI Act defines four tiers. Creditworthiness assessment of natural persons is listed among high-risk uses, so the bank faces obligations such as risk management, data governance, technical documentation, logging, human oversight and conformity assessment. Unacceptable-risk systems are prohibited practices such as social scoring and manipulative techniques, which does not describe credit scoring. Limited-risk obligations (transparency disclosures) apply to systems such as chatbots. Minimal-risk systems, such as spam filters, carry no specific obligations. Misclassifying the tier would leave the bank non-compliant."
    },
    {
      "id": "e1-34",
      "domain": 4,
      "skill": "4.3.3",
      "type": "multi",
      "difficulty": "medium",
      "question": "A logistics company is about to introduce AI-assisted dispatching. Dispatchers and drivers fear job losses and are circulating rumors. Which TWO communication actions are MOST appropriate? (Select TWO.)",
      "options": [
        "Communicate transparently about implementation timelines, expected outcomes and how roles will change, including what will not change",
        "Announce headcount-reduction targets up front so employees understand the business rationale",
        "Communicate only through the AI vendor to ensure technical accuracy",
        "Create two-way channels such as town halls and feedback forums, and involve dispatchers in designing how the AI will be used",
        "Keep the plans confidential until launch to avoid fueling further speculation"
      ],
      "answer": [
        0,
        3
      ],
      "explanation": "Skill 4.3.3 is creating transparent communication strategies that address workforce concerns about timelines, outcome expectations and effects on roles. Honest, specific communication reduces uncertainty, and two-way channels plus participation in design convert affected employees from subjects into stakeholders. Secrecy leaves the rumor mill as the only information source and erodes trust. Leading with headcount targets frames AI as a threat and undermines adoption. Delegating communication to a vendor signals that leadership is not accountable and ignores the human dimension. The exam favors transparent, participatory, leader-led communication."
    },
    {
      "id": "e1-35",
      "domain": 2,
      "skill": "2.2.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A CFO is reviewing an AI business case that compares only annual software license fees against projected labor savings and shows a 300 percent ROI. Which omission MOST undermines the credibility of the case?",
      "options": [
        "It does not convert intangible benefits such as employee morale into hard-dollar savings",
        "It does not extend the financial projection over a ten-year horizon",
        "It excludes total cost of ownership elements such as data preparation, integration, change management, ongoing inference usage and monitoring, and does not adjust benefits against a baseline",
        "It counts time savings even though no headcount reduction is planned"
      ],
      "answer": [
        2
      ],
      "explanation": "A comprehensive ROI framework (Skill 2.2.3) accounts for the full cost of an AI initiative, not just licenses: data readiness work, integration, training and change management, consumption-based inference charges that grow with usage, and ongoing monitoring and governance. It also measures benefits against an established baseline. Omitting these inflates ROI dramatically. A ten-year horizon is inappropriate for fast-moving AI technology and is not the core flaw. Intangible benefits should be tracked with proxies, but forcing them into hard dollars would weaken, not strengthen, credibility. Time savings can legitimately count as productivity gains redeployed to higher-value work even without headcount cuts."
    },
    {
      "id": "e1-36",
      "domain": 1,
      "skill": "1.2.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A travel company has a chatbot that answers FAQs. It now wants a system that, given the request \"rebook my family on the next available flight and let the hotel know we will be late,\" can plan the required steps, call the airline booking system, and pass the arrival change to the hotel's reservation system. Which capability distinguishes the new requirement from the existing chatbot?",
      "options": [
        "It requires a larger language model with a longer context window to hold the whole conversation",
        "It requires Retrieval Augmented Generation so the chatbot can look up flight schedules",
        "It requires an AI agent that can act autonomously toward a goal, use external tools and systems, and coordinate with other agents or services",
        "It requires fine-tuning the chatbot on travel-industry vocabulary"
      ],
      "answer": [
        2
      ],
      "explanation": "The scenario describes goal-directed autonomy (planning steps), tool use (calling booking APIs) and agent-to-agent or system-to-system orchestration (handing off to the hotel system). Those are the defining capabilities of an AI agent, as opposed to a conversational assistant that only answers questions. A longer context window improves memory within a conversation but does not let the model take actions. RAG improves answer accuracy by retrieving documents, but retrieval is not action. Fine-tuning changes style or domain fluency, not the ability to execute multi-step tasks. Skill 1.2.2 tests distinguishing agents (autonomy, tool use, orchestration, agent-to-agent communication) from other AI solutions."
    },
    {
      "id": "e1-37",
      "domain": 3,
      "skill": "3.2.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A US-based retailer deploys a GenAI customer-service chatbot for its online store, which serves customers in the European Union. The chatbot answers product questions and does not make decisions about eligibility, pricing or credit. Which EU AI Act obligation is MOST likely to apply?",
      "options": [
        "No obligations at all, because the company is headquartered outside the EU",
        "A full conformity assessment and registration in the EU high-risk database",
        "A transparency obligation to make clear to users that they are interacting with an AI system",
        "A prohibition on deployment because the system interacts directly with consumers"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 3.2.2 tests applying regulatory tiers correctly. A customer-service chatbot that does not make consequential decisions is a limited-risk system under the EU AI Act, whose main requirement is transparency: users must be informed they are dealing with AI. Conformity assessment and database registration apply to high-risk systems such as credit scoring, hiring or critical infrastructure. Consumer interaction alone does not make a system prohibited. The Act applies to providers and deployers whose systems are used in the EU regardless of where the company is headquartered, so being US-based does not exempt the retailer. Strategists should recognize extraterritorial reach and tier-appropriate obligations."
    },
    {
      "id": "e1-38",
      "domain": 2,
      "skill": "2.2.4",
      "type": "single",
      "difficulty": "easy",
      "question": "A bank launched a GenAI assistant for relationship managers six weeks ago. Revenue impact will not be measurable for at least a year. Which metric is the BEST leading indicator of whether the initiative is on track?",
      "options": [
        "Weekly active usage and adoption rate among the relationship managers",
        "Year-over-year growth in revenue per relationship manager",
        "Audited annual return on investment for the initiative",
        "Total cost savings reported at the end of the fiscal year"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 2.2.4 asks you to identify leading indicators that predict AI project success before lagging financial results arrive. Adoption and active usage are leading indicators: if relationship managers are not using the assistant, no downstream revenue benefit can materialize, and low adoption signals the need for training, trust-building or product changes now. Revenue growth, audited ROI and year-end cost savings are lagging indicators that confirm outcomes long after the opportunity to course-correct has passed. Other common leading indicators include user satisfaction, task completion rates, time-to-first-value and data quality scores."
    },
    {
      "id": "e1-39",
      "domain": 4,
      "skill": "4.3.4",
      "type": "single",
      "difficulty": "medium",
      "question": "Teams at a financial services company avoid proposing AI pilots. Two years ago a pilot failed and the team involved was publicly blamed. Which leadership intervention BEST addresses this cultural barrier?",
      "options": [
        "Outsource all pilots to a consulting firm so internal teams carry no risk",
        "Create psychological safety by framing pilots as structured experiments with predefined success and stop criteria, and visibly recognizing the learning from initiatives that do not succeed",
        "Mandate that each team submit a fixed number of AI pilot proposals per quarter",
        "Impose stricter penalties for failed pilots so teams prepare more carefully"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 4.3.4 is recognizing cultural barriers such as risk aversion, resistance to change and fear of failure and identifying leadership interventions. The barrier here is fear of blame; leaders counter it by redefining failure as a learning outcome of a well-designed experiment, setting explicit criteria so stopping is a legitimate result, and celebrating lessons learned. Harsher penalties intensify the fear. Mandated proposal quotas produce low-quality submissions without changing the underlying culture. Outsourcing avoids the issue and prevents internal capability from developing. The exam expects interventions that change beliefs and incentives, not just rules."
    },
    {
      "id": "e1-40",
      "domain": 1,
      "skill": "1.2.2",
      "type": "multi",
      "difficulty": "hard",
      "question": "An insurer is evaluating a vendor's \"agentic\" claims-processing proposal and wants to confirm that the solution is truly an AI agent rather than a conventional GenAI chat assistant. Which TWO capabilities would confirm it is an agent? (Select TWO.)",
      "options": [
        "The system invokes external tools such as the policy database, a fraud-check service and the payment platform to complete work",
        "The system can respond to claimants in multiple languages",
        "The system decides for itself the sequence of steps needed to reach the goal of settling a claim, adapting when a step fails",
        "The system supports a very large context window so it can read long policy documents",
        "The system has been fine-tuned on insurance terminology to improve the quality of its wording"
      ],
      "answer": [
        0,
        2
      ],
      "explanation": "The two hallmarks of an AI agent are autonomy (planning and adapting a sequence of actions toward a goal) and tool use (calling external systems to perform work), often combined with orchestration across multiple agents. A large context window, fine-tuned vocabulary and multilingual output are all properties a conventional chat assistant can have; none of them involve acting on the world. Strategists need this distinction because agents carry different risks (excessive agency, irreversible actions) and need stronger oversight and escalation controls than assistants. Skill 1.2.2 (core capabilities of AI agents) is tested by asking you to pick the capabilities that define agency rather than general model quality."
    },
    {
      "id": "e1-41",
      "domain": 3,
      "skill": "3.2.3",
      "type": "multi",
      "difficulty": "medium",
      "question": "A pharmaceutical company is deploying a Retrieval Augmented Generation assistant over its research and development document repositories. Which TWO access-control and data-security measures are MOST appropriate? (Select TWO.)",
      "options": [
        "Classify the documents and exclude or mask highly sensitive information before it is indexed into the knowledge base",
        "Allow all employees to share a single login to simplify onboarding",
        "Store prompts and responses in a publicly accessible location for easy troubleshooting",
        "Enforce least-privilege access so the assistant can only retrieve documents the requesting user is already entitled to see",
        "Grant the assistant administrator access to all repositories so it can always find the best answer"
      ],
      "answer": [
        0,
        3
      ],
      "explanation": "Skill 3.2.3 asks for appropriate access controls and data security measures for AI systems. A RAG assistant can become a shortcut around existing permissions unless retrieval respects each user's entitlements, so least-privilege access is essential. Data classification with exclusion or masking of highly sensitive content limits what can leak through the assistant in the first place. Granting the assistant blanket administrator access creates exactly the over-exposure the first measure prevents. Shared logins destroy accountability and auditability. Publicly storing prompts and responses exposes confidential research. Under the shared responsibility model, these data and access decisions belong to the customer, not the cloud provider."
    },
    {
      "id": "e1-42",
      "domain": 2,
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "easy",
      "question": "A startup is building a GenAI customer assistant on Amazon Bedrock. Traffic is unpredictable, with large spikes during marketing campaigns and near-zero usage overnight. Which pricing approach is MOST cost-effective at this stage?",
      "options": [
        "Provisioned throughput with a six-month commitment to guarantee capacity",
        "Seat-based licensing for each anticipated end customer",
        "A three-year Amazon SageMaker Savings Plan to lock in the lowest hourly rate",
        "On-demand, token-based pricing so the company pays only for the tokens it actually processes"
      ],
      "answer": [
        3
      ],
      "explanation": "Skill 2.2.5 covers basic cost planning and optimization. On-demand consumption pricing charges per input and output token with no commitment, which fits spiky, unpredictable workloads where paying for idle capacity would waste money. Provisioned throughput reserves model capacity for an hourly fee regardless of use, which suits steady, high, predictable volumes, not an early-stage startup with overnight troughs. A SageMaker Savings Plan applies to SageMaker ML instance usage, not Bedrock token consumption, and a three-year commitment is premature. Seat-based pricing applies to business-user tools such as Amazon Quick, not to an application calling foundation models."
    },
    {
      "id": "e1-43",
      "domain": 4,
      "skill": "4.3.5",
      "type": "single",
      "difficulty": "medium",
      "question": "A telecom operator needs to raise AI literacy across 20,000 employees in varied roles within 12 months, while also developing deeper skills for a smaller group that will build and govern solutions. Which workforce development approach is MOST appropriate?",
      "options": [
        "Train only the data science team, since they are the ones who build AI",
        "Send a single company-wide email explaining what AI is and how to use the approved tools",
        "A tiered, role-based program: foundational AI and responsible AI training for everyone, targeted training for leaders, and hands-on hackathons and proof-of-concept programs for practitioners",
        "Enroll all 20,000 employees in an advanced machine learning certification program"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 4.3.5 covers determining workforce development approaches to accelerate enterprise-wide AI literacy, such as POC programs, hackathons, training programs and responsible AI training. Different roles need different depth, so a tiered program delivers broad literacy efficiently while developing practitioners through applied formats. Advanced ML certification for everyone is costly, irrelevant to most roles and slow. Training only data scientists leaves the business users who must adopt and govern AI unprepared. A single email is not a development program. The exam rewards scalable, role-appropriate approaches that combine awareness, responsible use and hands-on practice."
    },
    {
      "id": "e1-44",
      "domain": 1,
      "skill": "1.2.3",
      "type": "single",
      "difficulty": "easy",
      "question": "A retailer's demand-forecasting model performed well for two years. Over the last six months, forecast accuracy has steadily declined even though nothing in the model or the infrastructure has changed. Customer buying patterns shifted significantly during that time. What is the MOST likely explanation and the appropriate response?",
      "options": [
        "The model has become biased against new customers and should be replaced with a rules engine",
        "The vendor has throttled the model's throughput, so the company should buy provisioned capacity",
        "Model drift: real-world data no longer resembles the training data, so the model must be monitored continuously and retrained on recent data",
        "The model has reached its token limit and needs a larger context window"
      ],
      "answer": [
        2
      ],
      "explanation": "When the statistical relationship between inputs and outcomes changes in the real world (here, shifting buying behavior), a model trained on older data gradually loses accuracy. This is model drift, and the remedy is ongoing performance monitoring with thresholds that trigger retraining. Token limits and context windows apply to GenAI prompts, not to a numerical forecasting model. Throttling would cause latency or errors, not a slow decline in accuracy. Bias is a fairness concern and a rules engine would be a poor fit for demand forecasting. Skill 1.2.3 tests why AI solutions need ongoing monitoring and updates: models are not \"done\" at deployment."
    },
    {
      "id": "e1-45",
      "domain": 2,
      "skill": "2.2.5",
      "type": "multi",
      "difficulty": "hard",
      "question": "A media company runs two GenAI workloads on Amazon Bedrock: a nightly job that summarizes two million articles for the next morning, and a daytime newsroom assistant with steady, high and predictable volume. Which TWO cost-optimization strategies are MOST appropriate? (Select TWO.)",
      "options": [
        "Use on-demand pricing for both workloads to avoid any capacity planning",
        "Use provisioned throughput for the daytime assistant, because its steady, predictable volume justifies committed capacity",
        "Purchase an Amazon SageMaker Savings Plan to cover the Bedrock token consumption of both workloads",
        "Use batch inference for the nightly summarization job, because latency is not critical and batch pricing is lower per token than on-demand",
        "Use provisioned throughput for the nightly job so the summaries complete as quickly as possible"
      ],
      "answer": [
        1,
        3
      ],
      "explanation": "Skill 2.2.5 expects strategists to match pricing models to workload patterns. Batch inference processes large volumes asynchronously at a discounted per-token price (AWS lists it at 50 percent below on-demand for supported models), ideal for an overnight job with a morning deadline. Provisioned throughput charges an hourly rate for reserved capacity and pays off when utilization is steady and high, as with the daytime assistant. Using provisioned throughput for the nightly job pays for capacity that sits idle all day. All on-demand forgoes available discounts on predictable volume. SageMaker Savings Plans apply to SageMaker ML instances, not Bedrock tokens."
    },
    {
      "id": "e1-46",
      "domain": 3,
      "skill": "3.2.4",
      "type": "single",
      "difficulty": "hard",
      "question": "An insurer has inventoried 40 AI use cases ranging from an internal meeting summarizer to automated claims adjudication. Its governance team has limited capacity. Which approach is MOST appropriate for deciding how to govern these systems?",
      "options": [
        "Govern use cases only after they reach production and show problems",
        "Apply the same comprehensive set of controls to every use case to ensure consistency",
        "Focus governance only on GenAI use cases, since traditional ML is well understood",
        "Classify each use case into a risk tier based on potential impact, degree of autonomy and regulatory exposure, and apply controls proportionate to the tier"
      ],
      "answer": [
        3
      ],
      "explanation": "Skill 3.2.4 covers applying AI risk classification frameworks to prioritize governance across the lifecycle. Tiering by impact, autonomy and regulatory exposure (consistent with frameworks such as the EU AI Act tiers and the NIST AI RMF Map function) focuses scarce governance effort on high-risk systems such as claims adjudication while allowing light-touch oversight of low-risk tools like meeting summaries. Uniform heavy controls waste capacity and slow low-risk innovation. Governing only GenAI ignores that predictive ML in underwriting or pricing can be among the highest-risk systems. Waiting for production problems is reactive and contradicts governance by design."
    },
    {
      "id": "e1-47",
      "domain": 4,
      "skill": "4.3.6",
      "type": "single",
      "difficulty": "hard",
      "question": "An insurer is automating first-pass claims triage with AI, which will handle most routine classification. Leadership must decide what happens to the claims adjusters' role. Which decision BEST balances human strengths with AI capabilities?",
      "options": [
        "Keep the adjuster role unchanged and have adjusters manually re-check every AI classification",
        "Redesign the adjuster role toward oversight of AI decisions, handling of exceptions and complex cases, and empathetic engagement with claimants in distress",
        "Eliminate the adjuster role entirely, since the AI handles classification",
        "Reassign all adjusters to the IT department to maintain the AI system"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 4.3.6 is identifying opportunities to transition human roles from manual operations to oversight and collaboration with AI, balancing human strengths such as judgment, empathy and creativity against AI capabilities. Shifting adjusters to exception handling, oversight and complex or emotionally sensitive cases captures the efficiency of automation while keeping humans where they add distinctive value and providing the human oversight that governance requires. Eliminating the role removes oversight and the human touch customers expect in difficult moments. Re-checking every AI output erases the efficiency gain. Reassigning adjusters to IT discards their domain expertise. The exam favors role redesign over elimination or status quo."
    },
    {
      "id": "e1-48",
      "domain": 1,
      "skill": "1.2.4",
      "type": "multi",
      "difficulty": "medium",
      "question": "A media company learns that employees have been pasting unreleased scripts into consumer-grade chatbots to get summaries. Leadership wants to reduce this shadow AI risk without stifling productivity. Which TWO actions are MOST effective? (Select TWO.)",
      "options": [
        "Terminate any employee found to have used an unapproved tool",
        "Publish a transparent classification of AI tools (approved, under evaluation, blocked) with the reasoning for each status",
        "Block all external internet access from corporate devices",
        "Take no action until regulators publish specific rules on employee AI use",
        "Provide an approved enterprise GenAI tool with contractual data protections so employees have a sanctioned alternative"
      ],
      "answer": [
        1,
        4
      ],
      "explanation": "Shadow AI arises when people have a real need and no safe, sanctioned way to meet it. A transparent tool classification gives employees clarity on what is approved, what is being evaluated and what is blocked, and why, which builds trust and compliance. Offering an approved enterprise tool with data-protection terms removes the incentive to use consumer tools. Blocking all internet access is disproportionate and harms productivity. Punitive termination drives usage underground rather than eliminating it. Waiting for regulators leaves confidential IP exposed now. Skill 1.2.4 (transparent classification of AI tools to mitigate shadow AI) emphasizes enablement plus clarity over prohibition alone."
    },
    {
      "id": "e1-49",
      "domain": 2,
      "skill": "2.3.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "An insurance company has learned that two competitors now settle simple claims within hours using AI. Executives are worried about losing customers. Which TWO assessments should the strategist complete FIRST? (Select TWO.)",
      "options": [
        "Determine whether the company's proprietary data and customer relationships can provide a defensible advantage that competitors lack",
        "Replicate the competitors' claims feature immediately before any analysis",
        "Wait for the competitors' results to be published before deciding anything",
        "Map competitors' AI capabilities against the company's own to identify gaps and opportunities to differentiate",
        "Reduce premiums across all product lines to retain customers"
      ],
      "answer": [
        0,
        3
      ],
      "explanation": "Skill 2.3.1 is assessing the competitive landscape and identifying advantages to adopting AI. A structured comparison of capabilities reveals where the company lags and where it could differentiate rather than merely match. Assessing proprietary data and relationships identifies the raw material of a sustainable advantage. Copying features without analysis risks spending on a me-too capability with no differentiation. Across-the-board price cuts erode margin without addressing the capability gap. Waiting cedes further ground in a fast-moving market. The exam expects a deliberate landscape assessment before investment decisions, not reflexive imitation or inaction."
    },
    {
      "id": "e1-50",
      "domain": 3,
      "skill": "3.3.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A CIO assumes that because the company's customer assistant runs on Amazon Bedrock, a managed AWS service, AWS is responsible for monitoring the assistant's output quality and preventing misuse. Under the AWS shared responsibility model, which statement is correct?",
      "options": [
        "The company is responsible for everything, including the physical security of AWS data centers",
        "AWS is responsible for security of the underlying infrastructure and service, while the company remains responsible for its data, prompts, access controls, guardrails and monitoring of its application's outputs",
        "AWS is responsible for everything, including the quality and appropriateness of the assistant's responses",
        "Neither party is responsible for output monitoring because foundation model outputs cannot be controlled"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 3.3.1 concerns the need for risk controls and monitoring for AI systems in production, and the shared responsibility model clarifies who owns them. AWS secures the cloud: facilities, hardware, the managed service and the models it hosts. The customer is responsible for security and governance in the cloud: what data it uses, how it prompts, who can access the application, which guardrails it configures and how it monitors outputs and handles incidents. Claiming AWS owns output quality misreads the model. Claiming the customer secures data centers reverses it. Saying no one is responsible ignores available controls such as guardrails, logging and evaluation."
    },
    {
      "id": "e1-51",
      "domain": 4,
      "skill": "4.4.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A company following the AWS Cloud Adoption Framework for AI approach has identified its AI opportunities and secured cross-functional alignment on goals, gaps and roadmap. It is now ready to run its first initiatives in production to demonstrate incremental business value. Which phase of the iterative transformation journey is the company entering?",
      "options": [
        "Launch",
        "Envision",
        "Scale",
        "Align"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 4.4.1 asks you to apply iterative transformation approaches that progress through phases. In the AWS CAF journey (Envision, Align, Launch, Scale), Envision identifies and prioritizes opportunities tied to business outcomes; Align identifies capability gaps across the CAF perspectives and builds cross-functional agreement; Launch delivers pilot initiatives in production and demonstrates incremental value; Scale expands proven initiatives across the enterprise. The company has completed Envision and Align and is about to deliver pilots in production, which is Launch. Knowing the phases helps strategists set appropriate expectations and governance for each stage."
    },
    {
      "id": "e1-52",
      "domain": 2,
      "skill": "2.3.2",
      "type": "single",
      "difficulty": "easy",
      "question": "An industrial equipment manufacturer uses sensor data and AI to predict machine failures. It plans to stop selling machines outright and instead charge customers a subscription for guaranteed uptime, with the manufacturer responsible for maintenance. Which concept does this BEST illustrate?",
      "options": [
        "Shadow AI adoption within the field-service organization",
        "AI-enabled business model transformation from product sales to an outcome-based service",
        "A build-buy-partner decision about the predictive model",
        "Operational efficiency improvement within the existing business model"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 2.3.2 is identifying opportunities to transform business models with AI. Moving from selling products to selling guaranteed outcomes (uptime as a service) changes how the company earns revenue, who bears maintenance risk and how customer relationships work; AI predictive maintenance is what makes the new model economically viable. Operational efficiency would describe using the same predictions simply to lower the manufacturer's own repair costs within the old sales model. Shadow AI refers to unapproved tool use, which is unrelated. Build-buy-partner concerns how the capability is sourced, not how the business monetizes it. The exam distinguishes incremental improvement from true business model change."
    },
    {
      "id": "e1-53",
      "domain": 1,
      "skill": "1.3.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A marketing team receives inconsistent and often unusable output when it asks a GenAI tool to write product descriptions. Which TWO prompt engineering improvements are MOST likely to raise output quality? (Select TWO.)",
      "options": [
        "Fine-tune a new model before attempting any further prompt changes",
        "Give the model a clear role and context, and specify the required format, tone and length of the output",
        "Include two or three examples of approved product descriptions in the prompt to show the desired pattern",
        "Shorten each prompt to a single keyword to minimize token usage",
        "Ask the model to \"be as creative as possible\" without constraints"
      ],
      "answer": [
        1,
        2
      ],
      "explanation": "Basic prompt engineering principles are clarity (role, context, task), explicit output specification (format, tone, length) and demonstration through examples (few-shot prompting). Both of the correct options apply those principles directly and cost almost nothing. Cutting prompts to a single keyword removes the context the model needs and worsens output. Asking for unconstrained creativity increases variability, the opposite of what the team wants. Fine-tuning is expensive and premature; the exam expects you to exhaust prompt improvements before paying for model adaptation. Skill 1.3.1 (apply basic prompt engineering principles) is tested by recognizing low-cost prompt fixes versus unnecessary technical escalation."
    },
    {
      "id": "e1-54",
      "domain": 3,
      "skill": "3.3.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A lender's loan-approval model passed a thorough fairness audit before launch. Twelve months later, complaints of unfair declines are rising from applicants in one geographic region, whose demographics have changed significantly. What is the MOST appropriate conclusion?",
      "options": [
        "The geographic feature should be removed, which will eliminate any possibility of bias",
        "Bias can only originate in training data, so the model should be retrained on the original data set",
        "Bias can emerge after deployment as populations and data shift, so the lender needs ongoing bias monitoring (bias drift detection) rather than relying on the launch audit",
        "The launch audit proves the model is fair, so the complaints must be unfounded"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 3.3.2 states that bias can occur at multiple stages of the AI lifecycle (problem framing, data collection, labeling, model design, deployment and feedback loops) and stresses ongoing monitoring for bias drift. A pre-launch audit is a snapshot; as the applicant population changes, model behavior can become unfair relative to the new reality. Treating the audit as permanent proof ignores drift. Retraining on the original data would reproduce the outdated patterns. Removing one feature does not eliminate bias because other correlated variables can act as proxies. The exam expects strategists to insist on continuous fairness monitoring as a production control."
    },
    {
      "id": "e1-55",
      "domain": 4,
      "skill": "4.4.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A CEO wants the company's first AI initiative to be a three-year program that completely re-engineers the supply chain. The AI strategist proposes a different sequence. Which recommendation BEST reflects proven scaling methodology?",
      "options": [
        "Start with a few short-term, high-visibility wins that build credibility, skills and funding, and use them as stepping stones toward the larger enterprise-wide transformation",
        "Delay any AI work until the complete three-year plan is fully designed and approved",
        "Launch every candidate AI project at once to maximize the chance of a breakthrough",
        "Begin the three-year program immediately so the organization is not distracted by small projects"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 4.4.2 is implementing scaling methodologies that start with short-term wins and build toward enterprise-wide deployments. Early wins prove value, surface practical lessons about data and change management, create internal champions and justify further investment; the large transformation then proceeds on a foundation of capability and trust. Committing immediately to a multi-year moonshot concentrates risk before the organization has learned anything. Launching everything at once overwhelms capacity and governance. Waiting for a perfect plan delays learning and value. The exam consistently favors iterative, win-driven scaling over big-bang programs."
    },
    {
      "id": "e1-56",
      "domain": 2,
      "skill": "2.3.3",
      "type": "single",
      "difficulty": "hard",
      "question": "Two competing retailers both build customer assistants on the same foundation model through Amazon Bedrock. Which factor is MOST likely to give one retailer a sustainable competitive advantage over the other?",
      "options": [
        "Access to the foundation model itself, since it is the most advanced model available",
        "A library of well-written prompt templates created during the pilot",
        "Proprietary customer and transaction data combined with feedback loops that continuously improve the assistant and are embedded in core processes",
        "Always adopting each new model version before the competitor does"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 2.3.3 asks how AI creates sustainable competitive advantage. Foundation models are available to everyone, so the model itself cannot be a durable differentiator. Advantage comes from assets competitors cannot easily copy: proprietary data, continuous feedback loops that make the system better with use (a data flywheel), and deep integration into processes and customer experience. Prompt templates are easily replicated and quickly commoditized. Rapid model upgrades are a temporary edge that the competitor can match within weeks. The exam expects strategists to locate advantage in data, process integration and learning loops rather than in access to technology."
    },
    {
      "id": "e1-57",
      "domain": 1,
      "skill": "1.3.2",
      "type": "single",
      "difficulty": "easy",
      "question": "A law firm uses a GenAI tool to summarize 400-page commercial contracts. Reviewers notice that the summaries consistently omit clauses that appear in the final third of each document. Which explanation is MOST likely?",
      "options": [
        "The model has a bias against commercial contracts and needs a fairness review",
        "The firm's AWS account lacks sufficient GPU capacity to process long documents",
        "The model is hallucinating and inventing clauses in place of the real ones",
        "The full contract exceeds the model's context window, so later pages are truncated; the documents should be chunked or retrieved in sections"
      ],
      "answer": [
        3
      ],
      "explanation": "Every GenAI model has a context window, the maximum number of tokens it can consider at once. A 400-page document can exceed that limit, so content beyond the window is silently dropped, which explains why the omissions cluster at the end. The fix is to chunk documents, summarize sections and combine, or use retrieval so only relevant passages are passed. Hallucination would produce fabricated content, not consistent omission of late pages. Bias relates to unfair treatment of groups, not document length. GPU capacity is an infrastructure concern that does not cause systematic truncation. Skill 1.3.2 tests recognizing when token limits and context windows affect GenAI performance."
    },
    {
      "id": "e1-58",
      "domain": 3,
      "skill": "3.3.3",
      "type": "multi",
      "difficulty": "medium",
      "question": "A marketing agency uses GenAI to produce advertising images and copy for clients. Which TWO measures BEST manage the harmful-content and intellectual property (IP) risks involved? (Select TWO.)",
      "options": [
        "Use models and providers that offer IP indemnification and are transparent about training data provenance",
        "Include competitors' logos and slogans in generated images to increase recognition",
        "Assume all AI-generated output is automatically protected by copyright owned by the agency",
        "Disable all logging of prompts and outputs so no record of generation exists",
        "Apply content filters or guardrails and require human review of all generated material before publication"
      ],
      "answer": [
        0,
        4
      ],
      "explanation": "Skill 3.3.3 covers managing harmful-content risks and IP concerns. Choosing providers with IP indemnification and transparent data provenance reduces exposure to claims that outputs infringe third-party rights. Content filters plus human review catch harmful, biased or brand-damaging material and inadvertent reproduction of protected content before it reaches the public. Assuming automatic copyright is wrong: in many jurisdictions purely AI-generated works have uncertain or no copyright protection. Disabling logs removes the evidence needed to demonstrate due diligence. Using competitors' trademarks is direct infringement. The exam expects a combination of vendor selection, technical controls and human oversight."
    },
    {
      "id": "e1-59",
      "domain": 4,
      "skill": "4.4.3",
      "type": "single",
      "difficulty": "easy",
      "question": "A multinational's regional teams keep making the same mistakes in their AI projects: inconsistent vendor choices, repeated governance gaps and no reuse of successful work. Which organizational mechanism BEST addresses this?",
      "options": [
        "Centralize all AI development in a single global team and stop regional AI work",
        "Establish an AI center of excellence (CoE) that provides shared standards, reusable assets, governance guidance and enablement to the regional teams in a hub-and-spoke model",
        "Allow each region to continue independently to preserve local autonomy",
        "Outsource all AI delivery to one global vendor to enforce consistency"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 4.4.3 covers establishing AI centers of excellence and cross-functional collaboration mechanisms to support scaling. A CoE codifies standards, curates reusable components and patterns, embeds governance and coaches business teams, spreading lessons across regions while leaving delivery close to the business in a hub-and-spoke structure. Full centralization removes local context and creates a bottleneck. Continued independence perpetuates the repeated mistakes. Outsourcing wholesale does not build internal capability and creates vendor dependency. The exam positions the CoE as an enabler and knowledge hub, not a monopoly on AI work."
    },
    {
      "id": "e1-60",
      "domain": 1,
      "skill": "1.3.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A retailer's customer-support assistant must answer questions about return and warranty policies that change monthly, and every answer must point to the policy document it came from. Which model adaptation approach is MOST appropriate?",
      "options": [
        "Retrieval Augmented Generation (for example, using Amazon Bedrock Knowledge Bases) so the model retrieves the current policy documents at query time and cites them",
        "Replace the GenAI assistant with a rules engine that maps every possible question to an answer",
        "Fine-tune the foundation model each month on the latest policy documents",
        "Paste the entire policy manual into every prompt so the model always has the latest text"
      ],
      "answer": [
        0
      ],
      "explanation": "RAG grounds the model's answers in an external, up-to-date document store at the time of the question, so updating a policy is as simple as updating the document, and retrieved passages provide citations. Amazon Bedrock Knowledge Bases is AWS's managed RAG capability. Fine-tuning bakes knowledge into model weights; it is costly, slow to refresh monthly and does not produce source citations. Pasting the full manual into every prompt is expensive in tokens and may exceed the context window. A rules engine cannot handle the open-ended phrasing of customer questions. Skill 1.3.3 tests choosing RAG for fresh, citable knowledge versus fine-tuning for style and behavior."
    },
    {
      "id": "e1-61",
      "domain": 2,
      "skill": "2.3.4",
      "type": "single",
      "difficulty": "medium",
      "question": "An online travel agency operates in a highly competitive sector where rivals already use AI for dynamic pricing and personalized offers, and customers switch providers easily. Leadership asks what level of AI investment is appropriate. Which recommendation is MOST appropriate?",
      "options": [
        "Invest aggressively and broadly, because AI capabilities have become table stakes in this mature, competitive sector and falling further behind threatens market position",
        "Defer investment until regulators clarify rules for AI in travel pricing",
        "Invest only in back-office automation and avoid customer-facing AI",
        "Invest minimally, because the competitive advantage from AI has already been captured by rivals"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 2.3.4 is about calibrating AI investment to industry maturity and competitive dynamics. In a sector where competitors already deploy AI in core customer interactions and switching costs are low, AI is a defensive necessity as much as an opportunity, so under-investment is the greater risk. Investing minimally misreads the situation: parity is required just to retain customers. Deferral for regulatory clarity cedes further share. Limiting AI to the back office ignores that the competitive battle is in pricing and personalization. In a less mature industry with cautious competitors, a more measured, option-preserving investment would be appropriate; the exam expects the recommendation to depend on context."
    },
    {
      "id": "e1-62",
      "domain": 3,
      "skill": "3.3.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A software company's developers have begun using a consumer GenAI coding assistant. Legal is concerned that proprietary source code may be used to train the vendor's models and that generated code could reproduce open-source code under restrictive licenses. Which is the MOST appropriate FIRST step?",
      "options": [
        "Rely on developers to manually check every generated snippet against open-source repositories",
        "Adopt an enterprise-grade GenAI coding service whose terms state customer data is not used for model training, enable its license and reference checks, and publish a usage policy",
        "Ban the use of all AI coding assistants until the legal landscape is fully settled",
        "Allow continued use of the consumer tool because developer productivity gains outweigh the IP risk"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 3.3.3 addresses IP concerns for AI systems. The first step that resolves both risks is moving to an enterprise service with contractual commitments on data use, built-in license or reference filtering and a clear policy, which protects proprietary code and reduces inadvertent license violations while retaining productivity. A blanket ban drives usage into shadow AI and sacrifices value. Continuing with the consumer tool knowingly accepts leakage of trade secrets. Manual checking of every snippet does not scale and does nothing about the training-data risk. The exam favors enabling safe, sanctioned use over prohibition or unmanaged acceptance."
    },
    {
      "id": "e1-63",
      "domain": 4,
      "skill": "4.4.5",
      "type": "multi",
      "difficulty": "medium",
      "question": "A retailer's GenAI merchandising assistant succeeded in a pilot with 50 users. The company now wants to roll it out to 5,000 users across all stores. Which TWO requirements are MOST important for the transition from experimental to production grade? (Select TWO.)",
      "options": [
        "Establish production governance and operations, including output monitoring, incident response, service-level expectations and cost controls",
        "Define clear ownership and an operational support model, with change control for prompts, models and data sources",
        "Keep the pilot's architecture, team and informal processes unchanged to preserve what worked",
        "Skip the security and compliance review because the pilot was already approved",
        "Disable guardrails during rollout to maximize response speed for the larger user base"
      ],
      "answer": [
        0,
        1
      ],
      "explanation": "Skill 4.4.5 addresses the transition of AI initiatives from experimental to production grade, including governance and operational requirements. At 100 times the user base, the system needs formal monitoring, incident processes, reliability targets and cost management, plus accountable owners and controlled change to prompts, models and data. Keeping informal pilot processes guarantees they break at scale. Pilot approval does not cover the expanded data exposure, user population and risk of production. Disabling guardrails increases harmful-output risk precisely when exposure is greatest. The exam expects production readiness to be treated as a distinct milestone with its own governance."
    },
    {
      "id": "e1-64",
      "domain": 1,
      "skill": "1.3.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A healthcare provider wants a GenAI model to draft clinical visit notes in a highly specific house style, section structure and terminology. The underlying medical knowledge does not change. Prompting with examples has produced inconsistent formatting across thousands of daily notes, and the team wants to shorten the long prompts it currently sends with every request. Which approach BEST meets these needs?",
      "options": [
        "Implement Retrieval Augmented Generation over a repository of past notes so the model can look up formatting examples",
        "Switch to a rules engine that fills a fixed note template from structured fields",
        "Increase the model's context window so more examples can be included in every prompt",
        "Fine-tune the model on a curated set of approved notes so the style and structure become default behavior without long prompts"
      ],
      "answer": [
        3
      ],
      "explanation": "Fine-tuning is the right adaptation when the goal is consistent style, tone, structure or domain-specific behavior that does not change often; it shifts that behavior into the model so each request needs far fewer tokens. RAG is designed to inject current factual knowledge at query time, not to enforce formatting, and here the knowledge is static. A larger context window just continues the long-prompt approach the team wants to eliminate and raises per-request cost. A rules-based template cannot draft narrative notes from free-form clinician input. Skill 1.3.3 expects strategists to choose RAG for knowledge freshness and citations, and fine-tuning for stable style and behavior."
    },
    {
      "id": "e1-65",
      "domain": 3,
      "skill": "3.3.4",
      "type": "single",
      "difficulty": "easy",
      "question": "A law firm's GenAI research assistant produced a brief that cited several court cases that do not exist. The partners want to continue using GenAI but prevent a recurrence. Which combination of mitigations is MOST appropriate?",
      "options": [
        "Increase the context window so the model can remember more real cases",
        "Run a fairness audit to remove the bias that caused the fabricated cases",
        "Retrain the model monthly to correct model drift",
        "Ground the assistant in a verified legal database using Retrieval Augmented Generation with citations, add contextual grounding checks, and require human verification of every cited authority"
      ],
      "answer": [
        3
      ],
      "explanation": "Skill 3.3.4 covers AI reliability risks, and fabricated citations are a textbook hallucination: the model generated plausible but false content. Mitigation combines grounding (RAG over a trusted source so answers are drawn from real documents), automated grounding or hallucination checks (such as Amazon Bedrock Guardrails contextual grounding), and human verification for high-stakes outputs. Model drift refers to accuracy decline as real-world data changes, which is not the mechanism here. A fairness audit addresses bias, not fabrication. A larger context window does not prevent a model from inventing content. Strategists must correctly name reliability issues so they prescribe the right controls."
    }
  ]
});
