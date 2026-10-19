window.AIB_DATA = window.AIB_DATA || {};
window.AIB_DATA.domains = window.AIB_DATA.domains || {};
window.AIB_DATA.exams = window.AIB_DATA.exams || [];

window.AIB_DATA.exams.push({
  "id": "exam2",
  "title": "Practice Exam 2",
  "durationMinutes": 130,
  "description": "Full-length 65-question paper mirroring AIB-C01 domain weights, with a harder mix of cross-industry scenarios (energy, hospitality, education, agriculture, government, legal, pharma, automotive, airlines, non-profit, fintech, real estate).",
  "questions": [
    {
      "id": "e2-01",
      "domain": 3,
      "skill": "3.3.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A digital publisher wants to use generative AI to create illustrations for news articles. The legal team is concerned about intellectual property (IP) exposure from both the training data used by the model and the generated outputs. Which approach BEST manages the IP risk while keeping the capability?",
      "options": [
        "Choose model providers that offer IP indemnification and document their training-data practices, keep human editorial review, and maintain provenance records for each generated image",
        "Treat generated images as public domain because no single human authored them",
        "Prohibit any use of generated imagery across the organization",
        "Add the phrase 'avoid copyrighted styles' to every prompt and rely on that instruction"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 3.3.3 covers managing harmful-content and IP concerns. IP risk is reduced through vendor selection (indemnification terms, licensed or disclosed training data), human review of outputs for resemblance to protected works, and provenance records that support audits and takedown responses. Treating outputs as public domain is a legal assumption that varies by jurisdiction and ignores infringement risk in the output itself. A prompt instruction is not an enforceable control and cannot address training-data provenance. A blanket prohibition removes business value and simply pushes usage into shadow AI. Governance means enabling use with controls."
    },
    {
      "id": "e2-02",
      "domain": 3,
      "skill": "3.2.4",
      "type": "single",
      "difficulty": "hard",
      "question": "An energy utility operating only in the United States wants a voluntary framework to structure how it governs, identifies, measures, and manages AI risk across its portfolio. It does not currently need certification or legal compliance in Europe. Which framework is the BEST fit?",
      "options": [
        "OECD AI Principles",
        "NIST AI Risk Management Framework (AI RMF) with its Govern, Map, Measure, and Manage functions",
        "ISO/IEC 23053",
        "The EU AI Act risk tiers"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 3.2.4 applies risk classification and management frameworks to prioritize governance decisions. NIST AI RMF is voluntary U.S. guidance organized into four functions (Govern, Map, Measure, Manage), which directly matches the utility's need to structure risk management without certification. The EU AI Act is binding law for systems placed on the EU market, not a voluntary structuring framework, and does not apply to a U.S.-only operator. ISO/IEC 23053 is a terminology and framework standard for ML systems, not a risk management process. OECD Principles are high-level values with no operational risk functions."
    },
    {
      "id": "e2-03",
      "domain": 2,
      "skill": "2.1.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A pharmaceutical company's AI steering committee is reviewing three initiatives. Initiative X (clinical-trial site selection) has shown strong value in pilot, has clean data, and aligns with the growth strategy. Initiative Y (adverse-event text mining) has high potential value, but the required data is fragmented across three legacy systems and will not be consolidated for nine months. Initiative Z (automated marketing claims) has modest value and an unresolved regulatory barrier that counsel says cannot be removed. Which set of decisions is MOST appropriate?",
      "options": [
        "Pause X until Y and Z catch up so the portfolio advances together",
        "Terminate Y because its data is not ready, scale X, and continue Z with a legal workaround",
        "Scale X, pause Y until the data consolidation is complete, and terminate Z",
        "Scale X, scale Y in parallel to maximize value, and pause Z"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 2.1.3 is prioritizing initiatives by value, feasibility, sustainability, and strategic alignment, deciding to scale, pause, or terminate. X meets every criterion and should scale. Y has value but a known, time-bound feasibility blocker, so pausing (not killing) preserves the option. Z combines low value with an unresolvable compliance barrier, so termination frees resources. Scaling Y now means scaling before its data exists. Pausing X holds a proven winner hostage to weaker initiatives. Terminating Y kills a recoverable initiative, and pursuing a legal workaround that counsel has already ruled out is not a credible plan."
    },
    {
      "id": "e2-04",
      "domain": 4,
      "skill": "4.3.5",
      "type": "multi",
      "difficulty": "medium",
      "question": "An energy utility with 9,000 field and office employees wants to build AI literacy across the whole workforce within a year, with a limited training budget. Which TWO approaches are MOST appropriate? (Select TWO.)",
      "options": [
        "Role-based tiers: short foundational and responsible AI training for everyone, with deeper hands-on tracks for teams that will build or oversee AI",
        "Sending the ten-person data science team to an international AI conference",
        "A mandatory 40-hour machine learning programming bootcamp for all employees",
        "Proof-of-concept programs and hackathons where cross-functional teams apply AI to real operational problems",
        "Relying on the software vendor's product documentation as the training program"
      ],
      "answer": [
        0,
        3
      ],
      "explanation": "Skill 4.3.5 asks for workforce development approaches that accelerate enterprise-wide literacy, such as POC programs, hackathons, and tiered training including responsible AI. Tiered, role-based training reaches everyone at proportionate depth, and applied POCs and hackathons build skills through real problems and create internal champions. A coding bootcamp for 9,000 people is costly and irrelevant to most roles. Sending ten specialists to a conference does nothing for the other 8,990 employees. Vendor documentation covers one product, not literacy about AI concepts, risks, and responsible use."
    },
    {
      "id": "e2-05",
      "domain": 2,
      "skill": "2.1.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A pharmaceutical company is mapping AI use cases to business functions. Which TWO pairings correctly map a high-impact AI capability to the business outcome it supports? (Select TWO.)",
      "options": [
        "An autonomous agent that submits drug approval applications to regulators without human review",
        "A chatbot that replaces the pharmacovigilance safety review team",
        "Literature mining and summarization in research and development to accelerate hypothesis generation",
        "Generative AI coding assistants in software development to increase developer productivity and shorten release cycles",
        "Generative image creation to design the physical appearance of new tablets"
      ],
      "answer": [
        2,
        3
      ],
      "explanation": "Skill 2.1.1 asks you to identify high-impact use cases across functions such as customer operations, sales and marketing, R&D, and software development, and map capabilities to outcomes. Coding assistants for developer productivity and literature mining for R&D acceleration are well-established, high-value mappings. Autonomous regulatory submissions remove required human accountability in a high-stakes process. Tablet appearance is a pharmaceutical engineering constraint, not a creative design problem for image generation. Replacing the safety review team with a chatbot ignores regulatory obligations and patient safety; AI should augment such teams."
    },
    {
      "id": "e2-06",
      "domain": 3,
      "skill": "3.1.3",
      "type": "single",
      "difficulty": "easy",
      "question": "An automotive company's project office asks when responsible AI practices, such as fairness assessment and privacy review, should be built into an AI project. Which answer reflects governance by design?",
      "options": [
        "During project planning and design, so that requirements, data choices, and controls are shaped by responsible AI from the start",
        "After deployment, once real-world issues have been observed",
        "Only when a regulator requests evidence",
        "At the final acceptance test, immediately before go-live"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 3.1.3 identifies when responsible AI should be integrated into project planning to ensure governance by design. Embedding fairness, privacy, transparency, and safety considerations at the planning and design stage is cheapest and most effective because they influence use-case selection, data sourcing, and control design. Waiting for post-deployment issues means harm has already occurred. Acting only on regulator demand is reactive and signals weak governance. Reviewing at final acceptance is too late to change fundamental design choices and typically produces either delays or accepted risk."
    },
    {
      "id": "e2-07",
      "domain": 4,
      "skill": "4.1.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A hotel group is about to launch an enterprise generative AI program and wants to assess its readiness first. Which THREE dimensions should the readiness assessment cover? (Select THREE.)",
      "options": [
        "Data quality and accessibility across brands and properties",
        "Leadership alignment on the goals and priorities for AI",
        "The size of next year's advertising budget",
        "Governance frameworks for managing AI risk and accountability",
        "The final choice of foundation model vendor",
        "The number of AI press releases issued by competitors"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "Skill 4.1.1 lists readiness dimensions such as leadership alignment, data quality, cultural preparedness, technical infrastructure, and governance frameworks. Leadership alignment, data quality and accessibility, and governance frameworks are three of those dimensions. Selecting a model vendor is a downstream solution decision, not a measure of organizational readiness. Competitor press releases inform competitive analysis (Domain 2), not internal readiness. The advertising budget is unrelated to AI adoption capacity. Readiness assessments look inward at people, process, data, technology, and governance before committing to solutions."
    },
    {
      "id": "e2-08",
      "domain": 4,
      "skill": "4.3.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A government agency has completed several promising AI pilots, but none has moved into departmental operations because department heads treat AI as an IT project and do not prioritize it. Which leadership intervention is MOST likely to restore momentum?",
      "options": [
        "Double the data science team's budget so it can build more pilots",
        "Enroll all staff in a mandatory AI literacy course",
        "Secure a senior executive sponsor who ties AI outcomes to the agency's strategic goals and empowers named champions within each department",
        "Have the IT department mandate adoption through policy"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 4.3.1 concerns executive sponsorship, leadership alignment, and empowered AI champions to sustain momentum. Pilots stall when the business does not own them; an executive sponsor who links AI to agency priorities, plus departmental champions with authority, creates business ownership. Literacy training is valuable but does not change departmental priorities. More pilots from a central team without business pull reproduces the same problem at greater cost. An IT mandate reinforces the perception that AI is an IT project and typically triggers passive resistance rather than adoption."
    },
    {
      "id": "e2-09",
      "domain": 2,
      "skill": "2.2.3",
      "type": "multi",
      "difficulty": "hard",
      "question": "A legal services firm is building a comprehensive total-cost view for its generative AI initiative so that the ROI calculation will withstand scrutiny from the finance committee. Which TWO cost categories are MOST commonly omitted yet MUST be included? (Select TWO.)",
      "options": [
        "The sunk cost of a previous, unrelated software project that failed",
        "Revenue from the firm's existing service lines",
        "Depreciation of the firm's office building",
        "The foundation model vendor's own research and development spending",
        "Ongoing inference consumption, monitoring, and model or knowledge-base maintenance after launch",
        "Change management, training, and the temporary productivity dip during adoption"
      ],
      "answer": [
        4,
        5
      ],
      "explanation": "Skill 2.2.3 requires comprehensive ROI frameworks. Business cases frequently count licenses and implementation but omit run costs, such as per-token inference, monitoring, guardrail operations, and keeping knowledge sources current, and the human side of adoption, including training, change management, and the temporary productivity dip. Sunk costs from unrelated projects are irrelevant to a forward-looking decision. Building depreciation is not attributable to the initiative. The vendor's R&D is embedded in its prices, not a separate customer cost. Existing revenue is neither a cost nor an incremental benefit of the initiative."
    },
    {
      "id": "e2-10",
      "domain": 1,
      "skill": "1.2.3",
      "type": "single",
      "difficulty": "easy",
      "question": "A hotel's demand-forecasting model worked well for two years. After a large competitor opened nearby and regional travel patterns changed, its forecasts became consistently inaccurate. What does this illustrate, and what should the business do?",
      "options": [
        "Replace the forecasting model with a generative AI chatbot",
        "Models are static after deployment, so the business must accept the lower accuracy",
        "Model drift; establish ongoing monitoring of forecast accuracy and retrain the model with recent data when performance degrades",
        "The model was deployed incorrectly; redeploy the original model"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 1.2.3 explains why AI solutions require ongoing monitoring and updates to detect and remediate model drift. The relationship between inputs and demand changed (new competitor, new travel patterns), so a model trained on the old world no longer fits; this is drift, not a deployment error. Monitoring plus retraining is the remedy. Accepting degradation ignores a solvable problem. A chatbot is a different solution type entirely and does not forecast demand. Business leaders should budget for monitoring and retraining as ongoing costs, not treat deployment as the finish line."
    },
    {
      "id": "e2-11",
      "domain": 1,
      "skill": "1.2.2",
      "type": "multi",
      "difficulty": "hard",
      "question": "An airline is designing a disruption-management system in which separate AI agents handle rebooking, hotel vouchers, and crew notifications. Which TWO statements about this design are CORRECT? (Select TWO.)",
      "options": [
        "Because agents use tools to act on booking and payment systems, their permissions should be scoped and high-impact actions should require human approval",
        "Agents eliminate the need for any human oversight once deployed",
        "An agent is simply a chatbot with a longer context window",
        "An orchestrating or supervisor agent can coordinate the specialized agents, which is an example of multi-agent orchestration and agent-to-agent communication",
        "Agents do not need guardrails because they follow their instructions deterministically"
      ],
      "answer": [
        0,
        3
      ],
      "explanation": "Skill 1.2.2 covers core agent capabilities: autonomy, tool use, agent-to-agent communication, and orchestration strategies. A supervisor pattern coordinating specialist agents is a recognized orchestration approach. Because agents act on systems, least-privilege permissions and human approval for consequential actions such as payments are essential; AWS offers Amazon Bedrock AgentCore as managed infrastructure for running such agents securely at scale. Agents are probabilistic and need guardrails. Context window size does not make a chatbot an agent; acting autonomously with tools does. Autonomy raises, not removes, the need for oversight."
    },
    {
      "id": "e2-12",
      "domain": 2,
      "skill": "2.1.5",
      "type": "single",
      "difficulty": "hard",
      "question": "A logistics company must migrate its customer-facing chatbot from a third-party vendor platform to a solution on Amazon Bedrock before the vendor contract ends in four months. Which transition approach BEST protects business continuity and performance?",
      "options": [
        "Skip pre-cutover testing because the vendor solution already proved the use case works",
        "Reuse the existing prompts unchanged, since foundation models behave the same across platforms",
        "Run both systems in parallel with a controlled traffic shift, compare the new system against baseline KPIs, migrate knowledge sources and conversation data, and model the cost difference before full cutover",
        "Perform a hard cutover over a weekend to avoid paying for two systems at once"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 2.1.5 asks for key considerations when transitioning between AI platforms: business continuity, cost implications, data readiness, and performance impact. A parallel run with staged traffic and KPI comparison protects continuity and reveals performance gaps before customers feel them; migrating data and modeling cost addresses the other two factors. A hard cutover saves a little money but concentrates all risk in one moment. Prompts and model behavior differ between platforms and models, so unchanged prompts will produce different results. Prior success on another platform does not validate the new implementation."
    },
    {
      "id": "e2-13",
      "domain": 2,
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "easy",
      "question": "A non-profit with a tight budget needs to summarize thousands of grant applications with a foundation model on Amazon Bedrock. The job runs overnight, and nobody is waiting on individual results. Which pricing option is LEAST expensive for this workload?",
      "options": [
        "On-demand inference using the priority service tier",
        "Batch inference, which processes large jobs asynchronously at a discount compared with on-demand pricing",
        "Provisioned throughput with a six-month commitment",
        "Fine-tuning a custom model and hosting it continuously"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 2.2.5 includes choosing the right pricing structure for the usage pattern. Batch inference is designed for large, latency-tolerant jobs and is priced at a significant discount (around 50 percent) to on-demand token pricing. Provisioned throughput reserves capacity by the hour and makes sense for steady, high-volume, latency-sensitive production traffic, not an occasional nightly job. Priority-tier on-demand costs more than standard on-demand and buys faster responses nobody needs here. Fine-tuning adds training and model-storage costs and does not change the summarization economics. Match the pricing model to urgency and volume."
    },
    {
      "id": "e2-14",
      "domain": 1,
      "skill": "1.3.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A pharmaceutical company's medical affairs team wants an assistant that answers staff questions from internal standard operating procedures and regulatory filings. The documents change monthly, and every answer must cite the source document. Which model adaptation approach is MOST appropriate?",
      "options": [
        "Retrieval Augmented Generation (RAG) that retrieves relevant passages from the current document repository at query time, for example with Amazon Bedrock Knowledge Bases",
        "Train a new foundation model from scratch on the company's documents",
        "Paste the full document set into the prompt for every question",
        "Fine-tune a foundation model on the documents each month so the knowledge is embedded in the model"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 1.3.3 asks when RAG versus fine-tuning improves responses. RAG is suited to knowledge that changes frequently and must be traceable, because retrieval happens at query time from the live source and answers can carry citations. Amazon Bedrock Knowledge Bases is AWS's managed RAG capability. Fine-tuning bakes knowledge into model weights, is costly to repeat monthly, and does not naturally produce citations. Pasting the entire corpus into each prompt will exceed context windows and inflate token costs. Training a model from scratch is wildly disproportionate for a document question-answering need."
    },
    {
      "id": "e2-15",
      "domain": 3,
      "skill": "3.1.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A fintech company's robo-advisor is under review. A regulator has asked the company to show why specific investment recommendations were made to specific customers, and customers have asked for assurance that their portfolio data is not used to train the vendor's foundation model. Which TWO responsible AI dimensions do these concerns MOST directly address? (Select TWO.)",
      "options": [
        "Privacy and security",
        "Sustainability",
        "Latency",
        "Explainability",
        "Scalability",
        "Cost optimization"
      ],
      "answer": [
        0,
        3
      ],
      "explanation": "Skill 3.1.1 applies responsible AI dimensions to business scenarios. AWS's core dimensions include fairness, explainability, privacy and security, safety, controllability, veracity and robustness, governance, and transparency. Being able to show why a recommendation was made is explainability. Assurance that customer data is not used for vendor model training is a privacy and security concern (Amazon Bedrock, for example, does not use customer prompts to train base models). Sustainability, scalability, cost optimization, and latency are architectural or operational qualities, not responsible AI dimensions, even though they matter for a well-architected system."
    },
    {
      "id": "e2-16",
      "domain": 2,
      "skill": "2.1.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A regional electric utility wants to use AI to reduce unplanned outages and the number of truck rolls needed to inspect equipment. The strategy team is mapping AI capabilities to this outcome. Which pairing of AI capability and business outcome is MOST appropriate?",
      "options": [
        "Anomaly detection on smart-meter and transformer sensor data to flag equipment likely to fail, reducing unplanned outages and unnecessary inspection visits",
        "Generative AI content creation for the customer newsletter, reducing unplanned outages",
        "Computer vision on drone imagery of power lines, reducing call-center wait times",
        "A recommendation engine for energy-saving products, reducing equipment failures"
      ],
      "answer": [
        0
      ],
      "explanation": "The skill tested is mapping an AI capability to a specific business outcome (Skill 2.1.1). Predictive maintenance built on anomaly detection over sensor data directly targets equipment failure and avoidable inspection visits, so capability and outcome match. The distractors pair real capabilities with unrelated outcomes: newsletter content generation does nothing for outage rates; drone-imagery computer vision is a valid inspection use case but the stated outcome (call-center wait times) is wrong; a product recommendation engine drives sales, not asset reliability. On the exam, check that the mechanism plausibly causes the outcome before choosing."
    },
    {
      "id": "e2-17",
      "domain": 2,
      "skill": "2.1.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A hotel group has decided to buy rather than build a generative AI guest-messaging product. Procurement wants to shorten the vendor evaluation and contracting cycle and consolidate billing with its existing AWS spend. Which approach is MOST appropriate?",
      "options": [
        "Choose the first vendor that responds to the request for proposal to save time",
        "Build the solution in-house because purchased software cannot be integrated with AWS billing",
        "Use the AWS Pricing Calculator to compare the vendors' software features",
        "Evaluate candidate software products in AWS Marketplace, use free trials or private offers where available, and purchase through the Marketplace so charges appear on the AWS bill"
      ],
      "answer": [
        3
      ],
      "explanation": "Skill 2.1.2 includes using AWS Marketplace to evaluate build-buy-partner decisions. Marketplace lists third-party AI software and models with standardized terms, trials, and private offers, and purchases flow through the AWS bill, which addresses both the evaluation speed and billing consolidation goals. The company has already chosen to buy, so building contradicts the decision, and the billing claim is false. Selecting the first responder abandons evaluation rigor. The AWS Pricing Calculator estimates AWS service costs before deployment; it does not compare third-party product features."
    },
    {
      "id": "e2-18",
      "domain": 3,
      "skill": "3.2.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A government agency deployed an internal knowledge assistant over its document repository. Shortly after launch, staff discovered the assistant would summarize confidential HR investigation files for any employee who asked. What is the MOST appropriate corrective measure?",
      "options": [
        "Enforce access controls so that retrieval respects each user's existing document permissions, and classify sensitive repositories before indexing them",
        "Fine-tune the model so that it learns which topics are confidential",
        "Delete all HR documents from the agency's systems",
        "Add an instruction to the system prompt telling the model not to reveal HR information"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 3.2.3 is about appropriate access controls and data security for AI systems. The failure is architectural: the assistant retrieved documents the user was never entitled to see. The fix is identity-aware retrieval that honors least privilege plus data classification to decide what is indexed at all. A prompt instruction is advisory and can be bypassed by rephrasing, so it is not a security control. Fine-tuning does not create permissions and may embed sensitive content in the model. Deleting HR records destroys needed business data instead of governing access to it."
    },
    {
      "id": "e2-19",
      "domain": 4,
      "skill": "4.4.2",
      "type": "single",
      "difficulty": "easy",
      "question": "A non-profit wants AI adopted across all of its programs within three years. Which scaling approach is MOST likely to succeed?",
      "options": [
        "Launch AI in every program simultaneously to show commitment",
        "Run ten unrelated pilots at once and scale whichever ones survive",
        "Start with one short-term, measurable win that has a visible sponsor, then expand in waves using the patterns and lessons from each wave",
        "Wait until all data across the organization is perfectly clean before starting"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 4.4.2 covers scaling methodologies that start with short-term wins and build toward enterprise-wide deployment. An early, visible win builds credibility and funding, and wave-based expansion lets each wave reuse proven patterns and avoid repeated mistakes. A simultaneous launch overwhelms limited capacity and multiplies risk. Ten unrelated pilots dilute focus and produce little reusable learning. Waiting for perfect data is a common excuse for inaction; data improves through use, and perfection is never reached. Iterate, prove, and expand."
    },
    {
      "id": "e2-20",
      "domain": 2,
      "skill": "2.2.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A hotel group is defining KPIs for a generative AI guest concierge. The finance team has already captured cost per interaction and upsell revenue. Which TWO additional KPIs represent intangible benefits the business case should include? (Select TWO.)",
      "options": [
        "Average server uptime of the concierge application",
        "Guest satisfaction scores (for example, CSAT or NPS) for AI-assisted interactions",
        "Number of foundation models evaluated during the pilot",
        "Front-desk staff workload and job satisfaction as routine queries are deflected",
        "Monthly token consumption on the foundation model"
      ],
      "answer": [
        1,
        3
      ],
      "explanation": "Skill 2.2.1 distinguishes tangible benefits (cost reduction, revenue growth) from intangible benefits (customer satisfaction, employee productivity and experience). Guest satisfaction and staff workload and satisfaction are the classic intangibles, and they often predict retention and attrition outcomes. Token consumption is a cost driver, not a benefit. The number of models evaluated is an activity measure with no business value. Server uptime is an operational service-level metric. A complete KPI set pairs the finance view with the customer and employee view."
    },
    {
      "id": "e2-21",
      "domain": 3,
      "skill": "3.3.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A video game company will use generative AI to create real-time dialogue for non-player characters in a game rated for teenagers. Which approach BEST manages the risk of harmful content?",
      "options": [
        "Moderate content only after players complain",
        "Rely on the foundation model's built-in safety training alone",
        "Configure guardrails with content filters, denied topics, and word filters, test them against adversarial red-team scenarios before launch, and monitor flagged outputs with a player reporting channel",
        "Cancel the feature because generative content can never be made safe for teenagers"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 3.3.3 is managing harmful-content risks. Layered safeguards, such as Amazon Bedrock Guardrails content filters, denied topics, and word filters, combined with pre-launch red teaming and post-launch monitoring and reporting, address the risk proactively and continuously. Base-model safety training is a useful baseline but is not tuned to a teen audience or the game's specific denied topics. Complaint-driven moderation means harm reaches players first. Cancelling forgoes the value when proven controls exist; responsible AI is about enabling use with appropriate safeguards."
    },
    {
      "id": "e2-22",
      "domain": 1,
      "skill": "1.1.2",
      "type": "single",
      "difficulty": "easy",
      "question": "A hotel chain is reviewing four technology initiatives. Which initiative is BEST classified as generative AI rather than traditional machine learning or rule-based automation?",
      "options": [
        "An assistant that drafts personalized pre-arrival emails for each guest from their profile and past stays",
        "A model that forecasts nightly occupancy from historical booking data",
        "A rules engine that assigns room upgrades based on loyalty tier",
        "A classifier that labels guest reviews as positive, neutral, or negative"
      ],
      "answer": [
        0
      ],
      "explanation": "Generative AI creates new content (text, images, code) rather than predicting a label or number, which is the discriminator for Skill 1.1.2. Drafting original, personalized emails is content generation, so it is GenAI. Occupancy forecasting is classic predictive ML (regression on historical data). Sentiment labeling is a classification task, also traditional ML, even though it works on text. The loyalty-tier upgrade logic is deterministic rule-based automation with no learning at all. Remember the nesting: GenAI is a subset of ML, which is a subset of AI, and rule-based systems are automation rather than learning."
    },
    {
      "id": "e2-23",
      "domain": 1,
      "skill": "1.1.5",
      "type": "single",
      "difficulty": "easy",
      "question": "An airline executive asks how the company's flight-delay prediction model actually learns. Which explanation is MOST accurate?",
      "options": [
        "Developers program explicit rules for every cause of delay, and the model applies those rules",
        "The model browses the internet in real time to learn how delays happen",
        "The model identifies patterns in historical flights that are labeled with whether they were delayed, is validated on data it has not seen, and then applies those patterns to predict delays for upcoming flights",
        "The model memorizes every past flight and looks up the closest match at prediction time"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 1.1.5 covers how models are trained on historical data. Supervised learning fits patterns between input features and labeled outcomes, holds out validation data to check generalization, and then performs inference on new cases. The rules explanation describes rule-based automation, not learning. The lookup explanation describes a table; models generalize rather than memorize (memorization is overfitting, a failure mode). The internet explanation confuses training with live web access; a trained predictive model does not learn continuously from the internet. Executives need this mental model to understand why data representativeness and retraining matter."
    },
    {
      "id": "e2-24",
      "domain": 2,
      "skill": "2.3.1",
      "type": "single",
      "difficulty": "medium",
      "question": "An airline is assessing where AI can give it a defensible competitive advantage. Which factor is the BEST indicator of a sustainable advantage rather than a temporary one?",
      "options": [
        "Proprietary operational data, such as a decade of fleet maintenance and disruption records, that competitors cannot replicate",
        "Hiring a well-known consultancy to run the AI program",
        "Being the first airline to adopt the newest model release",
        "Access to the same leading foundation models that are available to all competitors"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 2.3.1 asks you to assess the competitive landscape and identify advantages from AI adoption. Foundation models are broadly available, so they are table stakes; what competitors cannot copy is unique data combined with the processes and feedback loops built on it. Early adoption of a new model is quickly matched. Consultancies serve competitors too. Durable advantage comes from proprietary data, embedded workflows, and the flywheel in which usage generates more data and better outcomes, which the AWS CAF-AI describes as the AI flywheel."
    },
    {
      "id": "e2-25",
      "domain": 1,
      "skill": "1.3.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A law firm's generative AI assistant produces incomplete analyses when associates paste entire 400-page merger agreements into a single prompt. Clauses near the end of the document are frequently ignored. What is the MOST likely cause, and what is the BEST strategic response?",
      "options": [
        "The model's temperature is too low; raise it so the model is more creative",
        "The model needs fine-tuning on merger agreements",
        "The documents exceed the model's context window; retrieve and supply only the relevant sections or process the document in parts",
        "Generative AI cannot process legal text; switch to a rule-based system"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 1.3.2 is about recognizing when token limits or context window constraints affect performance. A 400-page document far exceeds most context windows, so later content is truncated or diluted, which matches the symptom. The remedy is retrieval of relevant sections (RAG), chunking, or staged summarization. Temperature controls randomness, not capacity, and higher temperature would make legal analysis less reliable. Fine-tuning teaches style and domain patterns but does not expand how much text fits in a prompt. Generative AI handles legal text well when given appropriately sized inputs."
    },
    {
      "id": "e2-26",
      "domain": 3,
      "skill": "3.2.2",
      "type": "single",
      "difficulty": "medium",
      "question": "An education technology company plans an AI tutoring product for students aged 10 to 16 in the European Union and the United States. Which action should the product leader take FIRST to address regulatory compliance risk?",
      "options": [
        "Conduct a compliance assessment with legal and privacy experts to map the applicable regulations (for example, data-protection and children's privacy laws and the EU AI Act) before finalizing the design",
        "Rely entirely on the foundation model vendor's compliance certifications",
        "Add a consent checkbox to the terms of service and proceed",
        "Launch quickly and remediate any regulatory issues after the first complaints"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 3.2.2 is identifying and addressing regulatory compliance risks for AI-enabled processes. Products that process children's data across two major jurisdictions trigger multiple regimes, so mapping obligations early lets the team design compliant data flows, oversight, and transparency from the start. Launch-and-fix exposes minors and invites enforcement. Vendor certifications cover the vendor's platform under the shared responsibility model; the company remains responsible for its own use case, data, and outputs. A consent checkbox is one control, insufficient on its own and not valid for minors in many jurisdictions."
    },
    {
      "id": "e2-27",
      "domain": 2,
      "skill": "2.1.2",
      "type": "single",
      "difficulty": "hard",
      "question": "An automotive parts supplier needs an AI system to detect weld defects on its production line. The welding process is a proprietary competitive differentiator, the company has a six-person data science team, the business wants results within nine months, and safety regulators require that defect decisions be explainable. Which build-buy-partner option is MOST appropriate?",
      "options": [
        "Partner with a consultancy that builds the model on its own platform and retains ownership of the resulting model",
        "Deploy a general-purpose generative AI chat assistant and ask it to describe each weld image",
        "Buy a generic visual-inspection SaaS product from AWS Marketplace and upload production images to the vendor",
        "Build a custom computer vision model with Amazon SageMaker AI, keeping proprietary process data and explainability design in-house"
      ],
      "answer": [
        3
      ],
      "explanation": "Skill 2.1.2 weighs budget, timeline, capability, vendor proposals, and regulation. When the process is a differentiator, in-house capability exists, and regulators need explainable decisions, building custom ML (Amazon SageMaker AI is the AWS service for custom model development) preserves IP and control. Buying a generic tool is fastest but exposes proprietary data and offers limited control over explainability for a differentiating process. The partner option cedes model ownership, which is unacceptable for a core differentiator. A general GenAI chat model is not a validated defect detector and offers no safety-grade explainability. Buy for commodity, build for differentiation."
    },
    {
      "id": "e2-28",
      "domain": 3,
      "skill": "3.3.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A national tax agency is about to move a generative AI taxpayer assistant from pilot to full production. Which TWO controls are MOST important to establish for the production system? (Select TWO.)",
      "options": [
        "Monitoring infrastructure uptime only, since the pilot already validated answer quality",
        "Logging of interactions and periodic reviews of a sample of responses by tax experts",
        "Continuous monitoring of output quality and guardrail interventions, with alert thresholds and an incident response process",
        "A single annual audit with no monitoring in between",
        "Allowing the model to update its own instructions based on taxpayer feedback"
      ],
      "answer": [
        1,
        2
      ],
      "explanation": "Skill 3.3.1 identifies the need for risk controls and monitoring mechanisms for AI systems in production. Continuous output monitoring with alerts and an incident process catches hallucinations, policy violations, and misuse as they emerge, and logging with expert sampling provides evidence and catches subtle errors that automated checks miss. Uptime monitoring alone ignores the main risk, which is wrong or harmful answers. An annual audit leaves eleven months of unobserved risk. Letting the model modify its own instructions removes human control and creates an unpredictable system."
    },
    {
      "id": "e2-29",
      "domain": 2,
      "skill": "2.3.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A manufacturer of agricultural equipment has strong AI capabilities and wants to use them to transform its business model, not just improve operations. Which initiative BEST represents business model transformation?",
      "options": [
        "Using predictive maintenance to reduce warranty repair costs on equipment already sold",
        "Offering farmers an outcome-based subscription in which the company guarantees yield improvements using AI-driven precision-farming recommendations, instead of only selling machines",
        "Using AI to optimize list prices for the existing equipment catalog",
        "Generating marketing content with generative AI to lower agency fees"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 2.3.2 asks you to identify opportunities to transform business models with AI. A business model transformation changes how value is created and captured, such as moving from product sales to outcome-based services. The other options use AI to improve the existing model: lower warranty costs, lower marketing spend, and better pricing are operational improvements that leave the revenue model unchanged. On the exam, look for changes to what is sold, to whom, or how revenue is earned to distinguish transformation from optimization."
    },
    {
      "id": "e2-30",
      "domain": 1,
      "skill": "1.3.3",
      "type": "single",
      "difficulty": "hard",
      "question": "An automotive company generates millions of technical service notes each year with a foundation model. The knowledge required is stable, but every note must follow a strict house style and structured format, and the company currently achieves this with a 3,000-token instruction block prepended to every request. Inference cost has become a concern. Which model adaptation approach is MOST appropriate?",
      "options": [
        "Keep the long instruction block but switch to the largest available model for better compliance",
        "Pretrain a new foundation model from scratch on automotive data",
        "Fine-tune a smaller model on examples of correctly formatted notes so the style and structure are learned, shortening each prompt",
        "Implement Retrieval Augmented Generation so the model retrieves the style guide at query time"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 1.3.3 asks when fine-tuning versus RAG improves responses. Fine-tuning excels at teaching consistent style, tone, and output structure, and it reduces per-request tokens, which matters at millions of calls; a smaller fine-tuned model also lowers cost per token. RAG is designed for injecting changing factual knowledge, but the knowledge here is stable and the problem is format, so retrieving the style guide still consumes tokens on every call. A larger model raises cost rather than lowering it. Pretraining from scratch is disproportionately expensive for a formatting problem."
    },
    {
      "id": "e2-31",
      "domain": 3,
      "skill": "3.3.4",
      "type": "single",
      "difficulty": "hard",
      "question": "An automotive company's demand-forecasting model has driven production planning accurately for two years. Last quarter, forecast errors doubled. Investigation shows a supplier changed the format of its order feed, and some fields now arrive empty, but no alert was raised. Which risk does this illustrate, and what is the MOST appropriate mitigation?",
      "options": [
        "Data quality degradation; implement monitoring of input data quality and model performance with alerts and defined retraining or rollback triggers",
        "Context window limits; move to a model with a larger context window",
        "Model bias; conduct a fairness audit of the forecasting model",
        "Hallucination; add guardrails to filter the model's outputs"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 3.3.4 covers AI reliability risks such as hallucinations, data quality degradation, and model drift. Here the model did not change; its inputs silently degraded, which is data quality degradation, and the absence of alerts is the control gap. Monitoring input data and output performance, with triggers for action, is the mitigation. Hallucination is a generative AI phenomenon (fabricated content), not a forecasting error caused by empty fields. Bias concerns unfair outcomes across groups, which is not described. Context windows apply to generative models, not to a tabular forecasting model."
    },
    {
      "id": "e2-32",
      "domain": 4,
      "skill": "4.3.3",
      "type": "single",
      "difficulty": "medium",
      "question": "An airline will introduce an AI-assisted crew rostering tool over the next 12 months. Rumors are spreading that the tool will eliminate scheduling jobs, and union representatives are asking questions. Which communication approach is MOST appropriate for leadership to take FIRST?",
      "options": [
        "Frame the initiative to staff primarily as a cost-reduction program to set realistic expectations",
        "Delay all communication until the tool is live so that every detail is accurate",
        "Publish a transparent plan that explains the implementation timeline, what the tool will and will not decide, how scheduler roles will change, and how staff can raise concerns",
        "Brief only senior managers and ask them to answer questions informally as they arise"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 4.3.3 calls for transparent communication that addresses workforce concerns about timelines, expected outcomes, and effects on roles. The transparent plan does exactly that and creates a feedback channel, which reduces rumor-driven resistance. Waiting until go-live leaves an information vacuum that rumors will fill, and unions in particular expect early consultation. Framing the program as cost-cutting confirms the fear that jobs are the target and undermines trust. Briefing only managers produces inconsistent, informal messaging rather than a coordinated strategy. Early, honest, two-way communication is the leadership behavior the exam rewards."
    },
    {
      "id": "e2-33",
      "domain": 4,
      "skill": "4.4.3",
      "type": "single",
      "difficulty": "medium",
      "question": "An airline's 12 business units have each procured different AI tools, written their own prompt guidelines, and built overlapping customer-service chatbots. Leadership wants to scale AI efficiently without removing business-unit ownership of use cases. Which mechanism is MOST appropriate?",
      "options": [
        "Allow business units to continue independently and consolidate tools later if costs become a problem",
        "Outsource all AI delivery to a single systems integrator",
        "Centralize all AI development in the COE and prohibit business units from running AI initiatives",
        "Establish an AI center of excellence (COE) that sets shared standards, provides reusable assets and platforms, and advises business units that continue to own their use cases"
      ],
      "answer": [
        3
      ],
      "explanation": "Skill 4.4.3 covers AI centers of excellence and cross-functional collaboration mechanisms for scaling. A hub-and-spoke COE provides standards, reusable patterns, shared platforms, and governance while leaving use-case ownership with the business, which balances consistency and agility. Full centralization creates a bottleneck and strips the business of ownership, which slows adoption. Continuing independently perpetuates duplication and inconsistent risk controls. Outsourcing everything removes the internal capability that scaling depends on. The exam favors a COE that enables rather than controls."
    },
    {
      "id": "e2-34",
      "domain": 1,
      "skill": "1.3.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A non-profit's grant writer uses a generative AI assistant, but the drafts are generic and miss the funder's required structure. Which change to the prompt is MOST likely to improve the output?",
      "options": [
        "Submit the same one-line request several times and pick the best result",
        "Specify the assistant's role, provide context about the funder and program, include an example of a successful past proposal, and state the required sections and length",
        "Set the model's temperature to its maximum value to encourage creativity",
        "Fine-tune a foundation model before writing any more proposals"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 1.3.1 covers basic prompt engineering principles: give the model a role, supply context, show examples (few-shot prompting), and specify format and constraints. The correct option applies all of them and directly targets the symptoms (generic content, wrong structure). Maximum temperature increases randomness, which makes compliance with a required structure less likely. Resubmitting a vague prompt yields variations of the same generic draft. Fine-tuning is a heavier model adaptation technique that is unnecessary when a better prompt would solve the problem; it is the wrong first step."
    },
    {
      "id": "e2-35",
      "domain": 2,
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "hard",
      "question": "A fintech company runs two generative AI workloads on Amazon Bedrock: a customer-facing assistant with steady, predictable high volume around the clock that must maintain consistent response times, and an internal experimentation environment with unpredictable, spiky usage. Which pricing strategy is MOST cost-effective?",
      "options": [
        "Provisioned throughput for both workloads to maximize commitment discounts",
        "Batch inference for the customer-facing assistant and provisioned throughput for experimentation",
        "On-demand pricing for both workloads to keep maximum flexibility",
        "Provisioned throughput with a term commitment for the steady production assistant, and on-demand pricing for the spiky experimentation workload"
      ],
      "answer": [
        3
      ],
      "explanation": "Skill 2.2.5 includes cost planning and optimization strategies. Provisioned throughput reserves model capacity at an hourly rate, with lower rates for longer commitments, so it suits steady, high-volume, latency-sensitive production traffic. On-demand token pricing suits unpredictable usage because you pay only for what you use. Committing capacity for spiky experimentation pays for idle hours; using on-demand for steady high volume forgoes available discounts and consistent capacity. Batch inference is asynchronous and unsuitable for a real-time customer assistant. Use the AWS Pricing Calculator to compare the options before committing."
    },
    {
      "id": "e2-36",
      "domain": 4,
      "skill": "4.3.6",
      "type": "single",
      "difficulty": "medium",
      "question": "An agricultural cooperative introduces an AI system that generates crop-treatment recommendations for member farms. The cooperative employs 40 agronomists who currently produce these recommendations manually. Which role redesign BEST balances human strengths with AI capabilities?",
      "options": [
        "Agronomists manually recompute every AI recommendation to verify it",
        "Agronomists review and validate AI recommendations, handle complex or unusual cases, and spend more time advising farmers in person, while the AI performs routine analysis",
        "Eliminate the agronomist role since the AI now produces the recommendations",
        "Keep the agronomists' work unchanged and use the AI output only for internal reporting"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 4.3.6 is about transitioning roles from manual operations to oversight and collaboration with AI, balancing human strengths such as judgment, empathy, and relationships against AI capabilities. The correct option moves agronomists to higher-value oversight, exception handling, and farmer relationships. Eliminating the role removes the expert oversight an agricultural recommendation system needs and destroys trust with members. Recomputing everything manually negates the productivity gain and signals no trust in the system. Ignoring the AI output wastes the investment. The target state is human oversight plus collaboration, not replacement or duplication."
    },
    {
      "id": "e2-37",
      "domain": 4,
      "skill": "4.4.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A mining company has identified and prioritized its AI opportunities and linked each to an executive sponsor and a measurable outcome. It now needs to surface cross-functional dependencies, stakeholder concerns, and readiness gaps before starting pilots. According to the AWS Cloud Adoption Framework for AI (CAF-AI) transformation journey, which phase is the company entering?",
      "options": [
        "Envision",
        "Align",
        "Scale",
        "Launch"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 4.4.1 covers iterative transformation phases. In AWS CAF-AI the cycle is Envision, Align, Launch, Scale. Envision identifies and prioritizes opportunities tied to stakeholders and outcomes, which the company has already completed. Align focuses on foundational capabilities, cross-organizational dependencies, and stakeholder concerns, exactly what is described. Launch delivers pilots from proof of concept to production to show incremental value, and Scale extends proven pilots for broad, sustained value. Recognizing phase boundaries helps you sequence work and avoid launching pilots before the organization is aligned."
    },
    {
      "id": "e2-38",
      "domain": 3,
      "skill": "3.1.4",
      "type": "multi",
      "difficulty": "hard",
      "question": "A pharmaceutical company is deciding which of its AI systems may operate autonomously and which require human oversight. Which THREE circumstances MOST strongly indicate that human oversight should be required? (Select THREE.)",
      "options": [
        "The task is low-stakes and easily reversible, such as drafting internal meeting summaries",
        "A regulation or internal policy explicitly requires accountable human sign-off for the decision",
        "The system is encountering inputs that are novel or outside the conditions it was validated on, or it reports low confidence",
        "The output is a routine formatting change to an internal document",
        "The model's response latency is higher than the service-level target",
        "The decision has a significant, hard-to-reverse effect on patient safety or a person's rights"
      ],
      "answer": [
        1,
        2,
        5
      ],
      "explanation": "Skill 3.1.4 asks you to recognize circumstances requiring human oversight and matching safeguards. Oversight intensity should scale with the severity and reversibility of harm, legal or policy accountability requirements, and the system's reliability in the current situation, including novel inputs or low confidence. Low-stakes, reversible tasks such as meeting summaries and routine formatting are appropriate for autonomy with spot checks; demanding human review for everything makes oversight unsustainable and dilutes attention. Latency is a performance issue, not a trigger for human judgment."
    },
    {
      "id": "e2-39",
      "domain": 2,
      "skill": "2.2.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A law firm is building the first-year business case for a generative AI contract-review tool. Costs: subscription licenses of $240,000 per year, a one-time implementation fee of $160,000, and $50,000 for change management and training. Benefits: 6,000 lawyer hours saved per year at a fully loaded cost of $150 per hour, plus $200,000 in avoided outside-counsel fees. What is the first-year return on investment (ROI)?",
      "options": [
        "244 percent",
        "59 percent",
        "163 percent",
        "144 percent"
      ],
      "answer": [
        3
      ],
      "explanation": "Skill 2.2.3 requires calculating ROI with a comprehensive view of costs and benefits. Total benefits are 6,000 x $150 = $900,000 plus $200,000, or $1,100,000. Total first-year costs are $240,000 + $160,000 + $50,000 = $450,000. ROI = (benefits - costs) / costs = $650,000 / $450,000 = 144 percent. The 244 percent answer divides gross benefits by costs without subtracting the investment. The 59 percent answer divides net benefit by benefits instead of costs. The 163 percent answer omits the change-management cost, a common mistake that understates the true investment. Comprehensive frameworks include training and adoption costs."
    },
    {
      "id": "e2-40",
      "domain": 4,
      "skill": "4.3.4",
      "type": "multi",
      "difficulty": "medium",
      "question": "At a law firm, partners are reluctant to volunteer their practice groups for AI pilots. Interviews reveal fear of reputational damage if a pilot fails and a culture in which mistakes are career-limiting. Which TWO leadership interventions are MOST likely to overcome these cultural barriers? (Select TWO.)",
      "options": [
        "Run low-risk, sandboxed pilots with explicitly defined acceptable failure criteria, and recognize teams for lessons learned as well as successes",
        "Publicly rank practice groups by AI usage each month",
        "Set mandatory adoption quotas for each practice group",
        "Have senior partners visibly use approved AI tools themselves and share their own learning experiences",
        "Outsource all pilots to an external firm so no internal group bears responsibility"
      ],
      "answer": [
        0,
        3
      ],
      "explanation": "Skill 4.3.4 is about recognizing cultural barriers such as risk aversion and fear of failure and choosing leadership interventions. Psychological safety is created by bounding risk (sandboxed pilots with defined acceptable failure) and rewarding learning, and by leaders modeling the behavior. Quotas and public rankings amplify the fear the interviews uncovered and encourage superficial compliance or gaming. Outsourcing avoids the cultural problem rather than addressing it, and the firm never builds its own confidence or capability. Culture changes when leaders change the consequences of trying."
    },
    {
      "id": "e2-41",
      "domain": 2,
      "skill": "2.3.4",
      "type": "single",
      "difficulty": "hard",
      "question": "A container shipping company operates in an industry where AI adoption is still emerging, but two competitors have begun deploying AI for route optimization. The company holds a decade of proprietary vessel, port, and weather data that competitors lack. Which AI investment posture is MOST appropriate?",
      "options": [
        "Concentrate the entire AI budget on a single long-term moonshot project",
        "Launch an equivalent pilot for every AI initiative a competitor announces",
        "Invest decisively in differentiating use cases where the proprietary data creates an edge, while buying commodity capabilities such as document processing rather than building them",
        "Minimize AI investment until the technology matures and the industry standard is clear"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 2.3.4 asks you to set investment levels based on industry maturity and competitive dynamics. In an emerging-maturity industry where rivals are moving, a company with unique data should invest where that data differentiates and avoid spending scarce capability on commodity functions available to everyone. Waiting cedes a window in which proprietary data could become a durable advantage. Mirroring competitor announcements is reactive and ignores the company's own strengths. A single moonshot concentrates risk and delays the measurable wins needed to sustain executive support."
    },
    {
      "id": "e2-42",
      "domain": 1,
      "skill": "1.1.3",
      "type": "single",
      "difficulty": "easy",
      "question": "An agricultural company has three data assets: soil-sensor readings stored in database tables, drone images of fields, and free-text notes written by agronomists after farm visits. Which statement about these data types is CORRECT?",
      "options": [
        "The sensor readings are structured data; the drone images and agronomist notes are unstructured data that typically require computer vision and natural language processing approaches",
        "Unstructured data cannot be used for AI until it is manually converted into tables",
        "All three are structured because they are stored digitally",
        "The drone images are structured because every image has the same resolution"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 1.1.3 distinguishes structured data (organized in rows and columns with a fixed schema) from unstructured data (images, audio, free text) and why the distinction matters for AI. Sensor tables are structured and suit traditional ML; images and free text are unstructured and are typically handled with computer vision and NLP, including generative models. Digital storage does not make data structured. Consistent image resolution is a file property, not a schema. Modern AI works directly on unstructured data, which is a major reason generative AI unlocked new business value."
    },
    {
      "id": "e2-43",
      "domain": 1,
      "skill": "1.1.6",
      "type": "single",
      "difficulty": "medium",
      "question": "A multinational wants to (1) certify that its organization-wide AI management practices meet an international standard and (2) adopt a common vocabulary and framework for describing its machine learning systems to vendors and regulators. Which pairing of standards is CORRECT?",
      "options": [
        "(1) ISO/IEC 42001 for the certifiable AI management system; (2) ISO/IEC 23053 for the framework and terminology describing ML systems",
        "(1) OECD AI Principles for certification; (2) ISO/IEC 42001 for terminology",
        "(1) NIST AI RMF for certification; (2) the EU AI Act for terminology",
        "(1) ISO/IEC 23053 for the certifiable AI management system; (2) ISO/IEC 42001 for ML terminology"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 1.1.6 covers awareness of global frameworks and unified AI vocabulary. ISO/IEC 42001 specifies requirements for an AI management system (AIMS) and is certifiable, much like ISO 27001 for information security. ISO/IEC 23053 provides a framework and common terminology for AI systems that use machine learning; it describes rather than certifies. The second option reverses the two. NIST AI RMF is voluntary guidance, not a certification scheme, and the EU AI Act is binding legislation rather than a vocabulary standard. The OECD AI Principles are high-level values, not a certifiable standard."
    },
    {
      "id": "e2-44",
      "domain": 3,
      "skill": "3.1.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A fintech lender's new credit model is 4 percent more accurate than the current model and would increase approved loans and revenue. Validation shows that approval rates differ materially between demographic groups in a way the current model does not exhibit. The launch date is in two weeks. What should the chief product officer recommend?",
      "options": [
        "Remove the demographic attributes from the input data and launch, since the model can no longer see them",
        "Launch on schedule because the accuracy gain is proven and address fairness in a future release",
        "Launch and monitor fairness metrics for six months before deciding whether to act",
        "Pause the launch, investigate the source of the disparity, mitigate it even if some accuracy is lost, and document the decision and rationale"
      ],
      "answer": [
        3
      ],
      "explanation": "Skill 3.1.2 tests navigating tradeoffs when business objectives conflict with responsible AI principles. Lending decisions affect people's access to essential services, so fairness outweighs a marginal accuracy gain, and the defensible path is to pause, remediate, and document. Launching first and fixing later knowingly exposes customers to discriminatory outcomes and the company to regulatory penalties. Simply dropping protected attributes ignores proxy variables (postcode, employer type) that reproduce the bias. Monitoring in production without acting is a plan to observe harm, not prevent it. Tradeoffs must be explicit, deliberate, and recorded."
    },
    {
      "id": "e2-45",
      "domain": 2,
      "skill": "2.1.4",
      "type": "single",
      "difficulty": "easy",
      "question": "A hotel group wants to automate the calculation of loyalty points. The rules are fully specified by the program's terms, change only when the program is formally revised, and every calculation must be exactly reproducible for audit. Which approach is MOST appropriate?",
      "options": [
        "Rule-based automation that encodes the program terms directly",
        "A generative AI model with guardrails to compute the points",
        "A machine learning model trained on past point awards to approximate the rules",
        "An AI agent that reads the terms and decides each award autonomously"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 2.1.4 asks you to recognize when AI is not the appropriate solution. Deterministic, fully specified, auditable logic is the textbook case for rule-based automation: it is cheaper, exactly reproducible, and easy to explain. An ML approximation introduces error into something that can be computed exactly. Generative AI is probabilistic and may produce different results on identical inputs, which fails the audit requirement. An agent adds autonomy and complexity where no judgment is required. Use AI where patterns are complex or unknown, not where rules are explicit."
    },
    {
      "id": "e2-46",
      "domain": 1,
      "skill": "1.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A utility executive hears that the outage-prediction model is 'running inference in production.' What does inference mean in this context?",
      "options": [
        "The trained model is being applied to new, incoming data to produce predictions",
        "Developers are writing the rules the model will follow",
        "The model is being trained on historical outage records",
        "Analysts are labeling past outages to build a training dataset"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 1.1.1 covers fundamental concepts such as algorithms, models, training, inference, and predictions. Inference is the operational phase in which a trained model receives new inputs and generates outputs (predictions), and it is what generates ongoing usage cost in production. Training is the earlier phase in which the algorithm learns patterns from historical data. Labeling creates the ground truth used for training, not the live predictions. Writing rules describes rule-based automation, which does not involve a learned model at all."
    },
    {
      "id": "e2-47",
      "domain": 1,
      "skill": "1.2.1",
      "type": "single",
      "difficulty": "easy",
      "question": "An energy utility is reviewing which of the following problems should be solved with machine learning rather than rule-based automation. Which problem is the BEST candidate for machine learning?",
      "options": [
        "Checking that customer forms contain all mandatory fields",
        "Applying the regulator-approved tariff schedule to monthly meter readings",
        "Detecting abnormal transformer behavior from thousands of interacting sensor patterns that engineers cannot fully specify in advance",
        "Routing outage tickets to regional teams based on postal code"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 1.2.1 is about deciding between rule-based automation and AI. Machine learning earns its place when the pattern is complex, evolving, or not fully specifiable by humans, which describes transformer anomaly detection. Tariff application, postal-code routing, and mandatory-field checks are deterministic with explicit, stable rules; rules are cheaper, exactly reproducible, and easier to audit for these cases. On the exam, if the stem says the logic is fully known and must be reproducible, choose rules; if it says patterns are complex or unknown, choose ML."
    },
    {
      "id": "e2-48",
      "domain": 2,
      "skill": "2.3.3",
      "type": "single",
      "difficulty": "medium",
      "question": "An online education platform uses AI to personalize learning paths. Executives ask why this capability should become a sustainable advantage rather than something competitors copy next quarter. Which explanation is MOST accurate?",
      "options": [
        "The platform announced its AI features before competitors did",
        "The platform negotiated the lowest token price in the industry",
        "Each learner interaction generates data that improves the recommendations, which attracts and retains more learners, who generate more data, creating a reinforcing flywheel competitors cannot shortcut",
        "The platform has exclusive access to a foundation model no competitor can obtain"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 2.3.3 describes how AI creates sustainable competitive advantages and operational improvements. The AI flywheel (described in the AWS CAF-AI) is a virtuous cycle in which data improves the model, the model improves outcomes, and better outcomes drive more usage and more data; the accumulated data and feedback loops are hard to replicate. Foundation models are widely available, so exclusivity is not realistic. Token pricing is a cost factor that competitors can match. Being first to announce is a transient advantage with no compounding mechanism."
    },
    {
      "id": "e2-49",
      "domain": 3,
      "skill": "3.3.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A university's admissions-support model passed a fairness audit at launch. Eighteen months later, as the applicant pool's demographics shifted, outcome disparities between groups have grown significantly. What does this scenario BEST illustrate, and what should the governance team do?",
      "options": [
        "Demographic data should be removed from monitoring to avoid collecting sensitive information",
        "The launch audit was sufficient; no further action is required because the model was certified fair",
        "Bias drift; implement ongoing fairness monitoring with thresholds that trigger investigation and retraining",
        "The model vendor should be replaced immediately"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 3.3.2 states that bias can emerge at multiple lifecycle stages and requires ongoing monitoring for bias drift. A model that was fair on launch data can become unfair as the population it scores changes, which is precisely what happened. The correct response is continuous fairness monitoring with defined thresholds and remediation triggers. A one-time audit is a snapshot and cannot certify future behavior. Removing demographic data from monitoring makes bias invisible rather than absent. Replacing the vendor without diagnosis assumes the model, not the data shift, is the cause and would not prevent recurrence."
    },
    {
      "id": "e2-50",
      "domain": 4,
      "skill": "4.4.5",
      "type": "multi",
      "difficulty": "hard",
      "question": "A hackathon team at a real estate company built a generative AI chatbot that answers tenant questions. The demo impressed leadership, who want it available to all tenants in three weeks. Which THREE gaps are MOST critical to close before the chatbot can be considered production-grade? (Select THREE.)",
      "options": [
        "Define cost controls and a capacity plan, including whether on-demand or provisioned throughput pricing fits the expected traffic",
        "Add guardrails, quality evaluation, and ongoing monitoring for accuracy, safety, and misuse",
        "Rename the chatbot for marketing purposes",
        "Rewrite the prototype in a different programming language",
        "Assign a named business owner and a support model with accountability for the chatbot's behavior",
        "Remove the human escalation path to reduce support costs"
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "Skill 4.4.5 addresses the transition from experimental to production-grade, including governance and operational requirements. Production needs ownership and accountability, safety and quality controls with monitoring, and financial and capacity planning. The programming language is an implementation detail outside the strategist's remit and not a production gate. Renaming is cosmetic. Removing the human escalation path does the opposite of what production readiness requires, since a customer-facing GenAI system needs a route to a person when it cannot answer safely."
    },
    {
      "id": "e2-51",
      "domain": 3,
      "skill": "3.2.4",
      "type": "single",
      "difficulty": "hard",
      "question": "A fintech company operating in the European Union runs four AI systems. Compliance budget is limited, and the governance committee must decide which system to prioritize FIRST for the most stringent EU AI Act obligations (risk management, documentation, human oversight, and conformity assessment). Which system should be prioritized?",
      "options": [
        "A generative AI tool that drafts marketing copy for internal review",
        "A model that scores consumer creditworthiness to approve or decline personal loans",
        "A customer-service chatbot that answers questions about branch hours and fees",
        "A model that detects fraudulent card transactions in real time"
      ],
      "answer": [
        1
      ],
      "explanation": "The EU AI Act uses a tiered approach: unacceptable (banned), high, limited, and minimal risk (Skill 3.2.4). Creditworthiness assessment of natural persons is listed in Annex III (access to essential private services), making it high-risk with the heaviest obligations. Fraud detection is a common trap: the Act expressly carves out AI used to detect financial fraud from that high-risk category. A general FAQ chatbot falls under limited-risk transparency duties (users must know they are talking to AI). Internally reviewed marketing drafts are minimal risk. Prioritize governance effort where the regulatory tier is highest."
    },
    {
      "id": "e2-52",
      "domain": 2,
      "skill": "2.2.4",
      "type": "multi",
      "difficulty": "medium",
      "question": "A fintech company wants early signals, within the first two months, that its AI underwriting initiative is on track to succeed. Which TWO metrics are leading indicators? (Select TWO.)",
      "options": [
        "Realized return on investment at the end of the first year",
        "Weekly active usage of the pilot tool by the underwriting team",
        "Percentage of planned data-readiness milestones completed on schedule",
        "Change in customer churn measured twelve months after launch",
        "Audited annual cost savings"
      ],
      "answer": [
        1,
        2
      ],
      "explanation": "Skill 2.2.4 is identifying leading indicators that predict AI project success. Leading indicators are observable early and causally linked to later outcomes: adoption by the intended users and on-time data readiness both predict whether value will materialize. Realized ROI, audited savings, and twelve-month churn are lagging indicators; they confirm success after the fact but give no early warning. Strategists use leading indicators to decide whether to continue, adjust, or stop before the full investment is spent."
    },
    {
      "id": "e2-53",
      "domain": 4,
      "skill": "4.4.4",
      "type": "single",
      "difficulty": "easy",
      "question": "A government department launched an AI document-processing service six months ago. Leadership wants to know whether it is delivering lasting value. Which approach BEST tracks long-term value?",
      "options": [
        "Rely on the launch-day announcement and the pilot report",
        "Establish continuous feedback mechanisms such as user ratings and flagged errors, report KPIs against the pre-launch baseline, and review results regularly to drive improvements",
        "Treat total tokens consumed as the primary measure of value",
        "Count the number of AI pilots started across the department"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 4.4.4 covers continuous feedback mechanisms and success metrics for tracking AI progress and long-term value. Value is demonstrated by outcome KPIs compared with the baseline, informed by user feedback, and reviewed on a cadence that feeds improvements. A pilot report is a point-in-time snapshot and cannot reveal degradation or adoption decline. Counting pilots measures activity, not value. Token consumption is a cost driver; more consumption could mean more waste rather than more value. Feedback loops turn deployment into a learning system."
    },
    {
      "id": "e2-54",
      "domain": 3,
      "skill": "3.1.4",
      "type": "multi",
      "difficulty": "hard",
      "question": "A government benefits agency plans to use generative AI to draft eligibility determination letters. A wrong letter can deny a citizen income for months. Which TWO safeguards are MOST appropriate before the system goes live? (Select TWO.)",
      "options": [
        "Allow letters to be sent automatically once pilot accuracy exceeds 90 percent",
        "Ask the model to rate its own confidence and treat that score as the quality control",
        "Increase the model's context window so it can read the complete case file",
        "Require a caseworker to review and approve every determination letter before it is sent",
        "Define escalation criteria so that low-confidence, unusual, or disputed cases are routed to senior staff"
      ],
      "answer": [
        3,
        4
      ],
      "explanation": "Skill 3.1.4 is about recognizing when AI needs human oversight and choosing safeguards such as guardrails and escalation criteria. High-stakes, hard-to-reverse decisions about individuals demand a human-in-the-loop review plus clear escalation rules. A larger context window improves input coverage but is not an oversight safeguard. A 90 percent accuracy threshold still means one in ten citizens could receive a wrong, consequential letter with no human check. Model self-reported confidence is unreliable and cannot substitute for independent review. Match the strength of oversight to the severity of harm."
    },
    {
      "id": "e2-55",
      "domain": 1,
      "skill": "1.1.4",
      "type": "single",
      "difficulty": "easy",
      "question": "A university built a model to predict which students are at risk of dropping out. The training data has attendance missing for 30 percent of students, inconsistent course codes across faculties, and outcome labels recorded differently each year. The model's predictions are unreliable. What is the MOST likely cause?",
      "options": [
        "The prediction threshold was set too high",
        "Poor data quality, so the model learned from incomplete and inconsistent inputs",
        "The model should have used generative AI instead of predictive machine learning",
        "Insufficient compute during training"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 1.1.4 tests why data quality matters: completeness, consistency, and accurate labels determine what a model can learn. Missing attendance, mismatched codes, and shifting label definitions are textbook quality defects, so unreliable output is expected regardless of algorithm. Generative AI is the wrong solution type for a prediction problem and would inherit the same bad data. More compute cannot create information that is absent from the data. Threshold tuning trades precision for recall but cannot fix a model trained on inconsistent ground truth. Remember the exam mantra: data quality before model sophistication."
    },
    {
      "id": "e2-56",
      "domain": 4,
      "skill": "4.2.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A real estate group's automated property valuation model performs poorly. The brokerage, property management, and mortgage units each store property data in separate systems with different identifiers, and the data science team can access only the brokerage data. What should the AI program lead do FIRST?",
      "options": [
        "Invest in prompt engineering to improve the valuation outputs",
        "Commission a data readiness assessment covering quality, accessibility, and integration across the three silos",
        "Hire additional brokers to validate valuations manually",
        "Replace the model with a larger foundation model from Amazon Bedrock"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 4.2.1 is about evaluating data readiness and the effect of silos. The symptoms described (fragmented systems, inconsistent identifiers, restricted access) are classic silo problems that starve the model of relevant signals; a readiness assessment identifies and sequences the fixes. A larger model cannot compensate for data it never sees, and valuation is a predictive task, not a generative one, so prompt engineering is irrelevant. Hiring brokers to correct outputs treats the symptom and scales cost with volume. Fix the data foundation before changing the model."
    },
    {
      "id": "e2-57",
      "domain": 4,
      "skill": "4.1.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A mining company has a modern cloud data platform and a funded AI budget, yet its AI pilots repeatedly stall. An assessment finds that no one can define success metrics for pilots, there is no process to approve AI-related risks, and most managers cannot describe what AI can and cannot do. Which capability gaps are preventing transformation?",
      "options": [
        "Technology gaps only; the data platform needs more capacity",
        "A funding gap; the budget should be increased",
        "Process, governance, and people gaps; technology is not the constraint",
        "A vendor gap; a different foundation model provider is needed"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 4.1.3 asks you to identify specific capability gaps across people, process, technology, and governance. Inability to define success metrics is a process gap, absence of a risk-approval mechanism is a governance gap, and low managerial AI literacy is a people gap. The platform and budget are explicitly in place, so technology and funding are not the constraints, and the vendor is irrelevant to the symptoms. Diagnosing the correct gap type prevents the common mistake of buying more technology to solve an organizational problem."
    },
    {
      "id": "e2-58",
      "domain": 3,
      "skill": "3.2.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A pharmaceutical company is forming a governance committee to oversee AI used in clinical trial operations. Which THREE design choices are MOST important for the committee to be effective? (Select THREE.)",
      "options": [
        "A single named executive who is accountable for AI risk decisions",
        "Outsourcing all governance decisions to an external consultancy",
        "Reviewing AI systems only after they have been in production for one year",
        "Cross-functional membership that includes business sponsors, data science, legal and regulatory affairs, privacy, and compliance",
        "Membership limited to the IT department so decisions can be made quickly",
        "Documented decision rights that define which AI use cases require committee approval"
      ],
      "answer": [
        0,
        3,
        5
      ],
      "explanation": "Skill 3.2.1 requires governance structures with appropriate cross-functional representation and clear accountability. Effective committees combine diverse expertise, a single accountable owner so decisions are not diffused, and explicit decision rights so teams know when to engage governance. Limiting membership to IT removes the legal, regulatory, and business voices that clinical AI decisions depend on. Outsourcing governance removes internal accountability, which regulators and boards will not accept. Reviewing only after a year of production contradicts governance by design and leaves risk unmanaged during the riskiest period."
    },
    {
      "id": "e2-59",
      "domain": 1,
      "skill": "1.2.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A travel company is comparing proposals for a customer-support solution. Which capability MOST clearly indicates that a proposal describes an AI agent rather than a conventional generative AI chatbot?",
      "options": [
        "It plans a multi-step resolution and autonomously calls the booking and refund systems to complete a rebooking",
        "It answers questions using passages retrieved from the help-center documents",
        "It summarizes long customer email threads for human advisors",
        "It classifies incoming messages by sentiment and urgency"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 1.2.2 distinguishes AI agents by autonomy, tool use, planning and orchestration, and sometimes agent-to-agent communication. The correct option shows an agent: it decomposes a goal into steps and acts on external systems (tools) to finish the task. Retrieval-based answering is a RAG chatbot that responds but does not act. Sentiment classification is traditional ML. Summarization is single-shot generative AI. All three distractors produce output for a human to act on, whereas the agent takes the action itself, which is also why agents require stronger guardrails and permission scoping."
    },
    {
      "id": "e2-60",
      "domain": 3,
      "skill": "3.2.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A government agency is building a citizen-facing assistant on Amazon Bedrock and asks which security and compliance responsibilities remain with the agency under the AWS shared responsibility model. Which responsibility remains with the agency?",
      "options": [
        "Deciding what categories of citizen data may be included in prompts and who may access the assistant, and configuring safeguards such as guardrails",
        "Patching and securing the infrastructure that hosts the foundation models",
        "Preventing third-party model providers from accessing the agency's prompts and outputs",
        "Physical security of the data centers where the foundation models are hosted"
      ],
      "answer": [
        0
      ],
      "explanation": "Skill 3.2.3 covers access controls and data security at a governance level, including the AWS shared responsibility model for AI. AWS is responsible for security of the cloud: physical facilities, host infrastructure, and model hosting; Amazon Bedrock also ensures model providers do not access customer prompts and outputs, and does not use them to train base models. The customer is responsible for security in the cloud: data classification, deciding what data enters prompts, identity and access control for the application, and configuring safeguards such as guardrails. The other three options are AWS-side responsibilities."
    },
    {
      "id": "e2-61",
      "domain": 1,
      "skill": "1.1.2",
      "type": "single",
      "difficulty": "medium",
      "question": "During a board briefing at an energy utility, a director asks how artificial intelligence, machine learning, and generative AI relate to one another. Which statement is MOST accurate?",
      "options": [
        "Machine learning and generative AI are separate fields that both sit outside artificial intelligence",
        "All artificial intelligence is machine learning, and generative AI is a newer name for the same thing",
        "Generative AI is the broadest category and includes machine learning and artificial intelligence",
        "Generative AI is a subset of machine learning, which is a subset of artificial intelligence; some AI, such as rule-based expert systems, is not machine learning at all"
      ],
      "answer": [
        3
      ],
      "explanation": "Skill 1.1.2 distinguishes AI, ML, and GenAI. AI is the broad goal of machines performing tasks that require intelligence; ML is the subset that learns patterns from data rather than following hand-written rules; GenAI is a further subset (built on deep learning foundation models) that creates new content. Rule-based systems are AI without learning, so not all AI is ML, which rules out the claim that all AI is ML. The other two distractors invert or break the nesting. Knowing the hierarchy helps strategists place vendor claims and choose the right solution type."
    },
    {
      "id": "e2-62",
      "domain": 2,
      "skill": "2.2.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A law firm plans to pilot a generative AI contract-review assistant and wants to prove its value to the partners. Which action should the program lead take FIRST?",
      "options": [
        "Ask associates after the pilot to estimate how long reviews used to take",
        "Measure the current average review hours per contract type and the current error rate for several weeks before the pilot starts",
        "Measure results after deployment and extrapolate the savings backward",
        "Compare the pilot team's results against the vendor's published productivity benchmarks"
      ],
      "answer": [
        1
      ],
      "explanation": "Skill 2.2.2 is about establishing baseline metrics before implementation so that the AI effect can be measured credibly. Only a pre-pilot measurement of hours and error rates gives a like-for-like comparison. Vendor benchmarks describe other firms with different contracts and workflows, not this firm's starting point. Retrospective estimates are subject to recall bias and will be challenged by skeptical partners. Measuring only after deployment leaves no counterfactual, so any claimed saving is an assumption rather than evidence. Baseline first, then pilot, then compare."
    },
    {
      "id": "e2-63",
      "domain": 1,
      "skill": "1.2.4",
      "type": "multi",
      "difficulty": "medium",
      "question": "A law firm discovers that associates are pasting confidential client documents into free consumer chatbots because no approved alternative exists. Which TWO actions BEST mitigate this shadow AI risk while preserving productivity? (Select TWO.)",
      "options": [
        "Publish a transparent register that classifies AI tools as approved, under evaluation, or blocked, with the reasons for each status",
        "Rely on each associate's professional judgment with no formal policy",
        "Block all generative AI websites at the firewall without offering an alternative",
        "Require a partner to review every prompt before it is submitted to any AI tool",
        "Provide an approved enterprise generative AI tool with contractual data protections and train staff on its use"
      ],
      "answer": [
        0,
        4
      ],
      "explanation": "Skill 1.2.4 covers transparent classification of AI tools to mitigate shadow AI. A visible approved / under evaluation / blocked register tells staff what they may use and why, and an approved alternative with data protections removes the incentive to use consumer tools. Blocking everything without an alternative drives usage to personal devices and hides the risk rather than reducing it. Reviewing every prompt is unworkable and would eliminate the productivity gain. Relying on individual judgment is exactly the status quo that produced the problem. Shadow AI is reduced by clarity plus a safe path."
    },
    {
      "id": "e2-64",
      "domain": 4,
      "skill": "4.1.2",
      "type": "single",
      "difficulty": "medium",
      "question": "An agricultural cooperative has several teams running AI pilots independently: one for crop-yield prediction, one for a farmer chatbot, and one for invoice processing. There is no shared data platform, no common governance, and results are not reused. Which AI maturity stage BEST describes the cooperative, and what is the MOST appropriate next step?",
      "options": [
        "Enterprise-scale stage; focus on cost optimization of the existing deployments",
        "Pre-adoption stage; run awareness workshops before any further pilots",
        "Experimentation stage; establish shared data foundations and governance before scaling the pilots",
        "Experimentation stage; immediately roll out all three pilots to every member farm"
      ],
      "answer": [
        2
      ],
      "explanation": "Skill 4.1.2 asks you to place an organization on an AI maturity model. Multiple isolated pilots with no shared platform, governance, or reuse is the hallmark of the experimentation stage. The right progression is to build the foundations (data, governance, operating model) that let pilots become repeatable. The enterprise-scale answer misreads the stage; nothing is deployed at scale. Rolling out all pilots scales without foundations, which is how pilots fail in production. The pre-adoption answer underestimates maturity: pilots already exist, so awareness-only workshops would be a step backward."
    },
    {
      "id": "e2-65",
      "domain": 4,
      "skill": "4.2.2",
      "type": "multi",
      "difficulty": "medium",
      "question": "A national government wants to build AI services that draw on data from the tax, transport, and social services departments, but each department guards its data and disputes who may use it. Which TWO foundations should be established FIRST? (Select TWO.)",
      "options": [
        "Clear data ownership and stewardship roles that define who is accountable for each data domain",
        "A data-sharing framework with agreements, access rules, and privacy safeguards that departments can rely on",
        "Copying all departmental data into a single repository before any ownership is agreed",
        "Allowing each department to build its own AI systems on its own data indefinitely",
        "Purchasing external commercial datasets to avoid the internal disputes"
      ],
      "answer": [
        0,
        1
      ],
      "explanation": "Skill 4.2.2 describes the importance of data strategies, data ownership, and data-sharing frameworks as foundations for AI. Clear ownership resolves the question of who decides, and a sharing framework gives departments a trusted, lawful way to share. Centralizing data before ownership is agreed escalates the political dispute and may breach privacy law. Letting each department work alone entrenches the silos that limit AI value. Buying external data sidesteps the problem but cannot replace the specific citizen data these services need."
    }
  ]
});
