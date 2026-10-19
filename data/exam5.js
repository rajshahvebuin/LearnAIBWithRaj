window.AIB_DATA = window.AIB_DATA || {};
window.AIB_DATA.domains = window.AIB_DATA.domains || {};
window.AIB_DATA.exams = window.AIB_DATA.exams || [];

window.AIB_DATA.exams.push({
  "id": "exam5",
  "title": "Practice Exam 5",
  "durationMinutes": 130,
  "description": "Full-length 65-question paper with extra weight on AWS services, pricing models, cost control and the frameworks named in the exam guide.",
  "questions": [
    {
      "id": "e5-01",
      "domain": 1,
      "skill": "1.1.2",
      "type": "single",
      "difficulty": "easy",
      "question": "A craft brewery runs two AI systems: one forecasts next month's keg demand for each pub it supplies, and the other writes tasting notes and label copy for new beers. The owner asks what fundamentally separates the two. Which description is MOST accurate?",
      "options": [
        "The demand model is generative AI because it produces numbers that did not exist before, and the copy writer is traditional machine learning",
        "The demand model is traditional machine learning that predicts a value from historical patterns, while the copy writer is generative AI that creates new content from a foundation model",
        "Both are rule-based automation because each follows instructions written by the brewery's staff",
        "Both are generative AI because both were trained on the brewery's historical data"
      ],
      "answer": [1],
      "explanation": "The governing concept is the distinction between AI, machine learning and generative AI. A demand forecaster learns patterns from historical sales and outputs a prediction, which is classic machine learning. A label-copy writer produces new text from a foundation model, which is generative AI. Calling the forecaster generative because it outputs new numbers confuses prediction with content creation. Neither system is rule-based automation, because both learn from data rather than following hand-written rules. Training on historical data does not make a system generative; most traditional ML models are trained on historical data too."
    },
    {
      "id": "e5-02",
      "domain": 2,
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "medium",
      "question": "An e-sports organization uses Amazon Bedrock for two workloads: a live commentary assistant that must respond as fast as possible during streamed matches, and a weekly job that summarizes thousands of fan forum posts where a delay of several hours is acceptable. Leadership wants to optimize cost without harming the live experience. Which combination of Amazon Bedrock inference service tiers is MOST appropriate?",
      "options": [
        "Priority tier for both workloads so that every request is processed at the fastest speed",
        "Flex tier for the live commentary assistant and Priority tier for the forum summaries",
        "Priority tier for the live commentary assistant and Flex tier for the forum summaries",
        "Standard tier for the live assistant and Priority tier for the forum summaries to balance the account's total spend"
      ],
      "answer": [2],
      "explanation": "The concept is matching Amazon Bedrock service tiers to latency needs. Priority tier charges a premium over Standard in exchange for faster response, which fits the live commentary assistant. Flex tier offers a discount for workloads that tolerate longer processing and lower priority during peak demand, which fits the weekly forum summaries. Paying the Priority premium for both wastes money on a job that does not need speed. Reversing the tiers slows the live assistant and overpays for the batch-like summaries. Putting the latency-sensitive workload on Standard while paying extra for the tolerant one inverts the business priorities."
    },
    {
      "id": "e5-03",
      "domain": 3,
      "skill": "3.2.3",
      "type": "multi",
      "difficulty": "hard",
      "question": "A port authority will deploy a cargo-documentation assistant on Amazon Bedrock. The compliance officer asks which obligations remain with the port authority under the AWS shared responsibility model for generative AI workloads. Which TWO statements are correct? (Select TWO.)",
      "options": [
        "The port authority remains responsible for classifying the data it sends to the model and for deciding who may access the assistant",
        "AWS becomes responsible for reviewing the assistant's generated outputs for accuracy because Amazon Bedrock is a managed service",
        "The port authority remains responsible for configuring safeguards such as guardrails and for ensuring the assistant's outputs comply with applicable law",
        "AWS takes over the port authority's regulatory compliance obligations for any workload that runs on a managed AI service",
        "The port authority must secure the physical data centers because its data is processed there"
      ],
      "answer": [0, 2],
      "explanation": "The shared responsibility model splits security of the cloud (AWS) from security in the cloud (the customer). Even on a managed service, the customer keeps ownership of its data, its classification decisions, access permissions, and the application-level safeguards such as guardrails and output review. Legal responsibility for lawful use of outputs also stays with the customer. AWS does not review a customer's generated content for accuracy, and it never assumes the customer's regulatory obligations, although it provides compliance programs the customer can inherit. Physical data-center security is squarely on the AWS side of the model, so the customer never secures facilities."
    },
    {
      "id": "e5-04",
      "domain": 4,
      "skill": "4.4.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A language school has two AI pilots in production: an automated placement test and an enrollment-inquiry assistant. Both are delivering measurable incremental value and have produced lessons about data quality and staff training. Using the AWS Cloud Adoption Framework (AWS CAF) transformation phases, which phase has the school just completed and what should come next?",
      "options": [
        "It has completed Envision and should now move to Align to identify capability gaps",
        "It has completed Align and should now move to Launch to deliver its first pilots",
        "It has completed Launch and should now move to Scale to expand the pilots and ensure benefits are sustained",
        "It has completed Scale and should restart Envision for the next cycle of opportunities"
      ],
      "answer": [2],
      "explanation": "AWS CAF describes four iterative phases: Envision (identify and prioritize opportunities tied to outcomes), Align (surface capability gaps and dependencies), Launch (deliver production pilots that show incremental value and generate lessons), and Scale (expand pilots to the target size and make sure benefits are realized and sustained). Pilots in production that deliver value and lessons are the hallmark of Launch, so Scale is next. Envision and Align precede pilots, so neither has just finished. Scale has not been completed because the pilots have not yet been expanded across the organization."
    },
    {
      "id": "e5-05",
      "domain": 2,
      "skill": "2.1.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A fashion retailer has decided to buy rather than build a third-party AI merchandising agent. Procurement is concerned about lengthy contract negotiations, separate invoices and the inability to trial the product first. Which benefit of sourcing the product through AWS Marketplace MOST directly addresses these concerns?",
      "options": [
        "AWS Marketplace guarantees that every listed AI product has been certified as free of bias",
        "AWS Marketplace offers standardized contract terms, private offers, free trials and consolidated billing on the existing AWS invoice",
        "AWS Marketplace removes the need for the retailer to evaluate the vendor's security practices because AWS assumes that responsibility",
        "AWS Marketplace requires the retailer to rebuild the agent on Amazon SageMaker AI before it can be used"
      ],
      "answer": [1],
      "explanation": "The concept is the role of AWS Marketplace in build-buy-partner decisions. For a buy decision, Marketplace shortens procurement through standardized legal templates, vendor private offers, free trials and billing consolidated onto the AWS account, which maps directly to procurement's three concerns. Marketplace does not certify products as bias-free; responsible AI evaluation stays with the buyer. It also does not relieve the buyer of vendor due diligence under the shared responsibility model. And a purchased product is consumed as offered; there is no requirement to rebuild it on Amazon SageMaker AI."
    },
    {
      "id": "e5-06",
      "domain": 1,
      "skill": "1.3.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A co-working space operator wants a member-support assistant that answers questions about house rules, booking policies and pricing, which differ by location and change frequently. The documents live in SharePoint and Google Drive. The company has no machine learning engineers and wants AWS to handle ingestion and retrieval. Which approach BEST fits?",
      "options": [
        "Fine-tune a foundation model on the current policy documents so that the knowledge is embedded in the model",
        "Use Amazon Bedrock Knowledge Bases as a fully managed Retrieval Augmented Generation (RAG) layer connected to the existing document sources",
        "Build a custom vector database and retrieval pipeline on Amazon SageMaker AI to maximize control",
        "Paste all policy documents into every prompt so the model always has the full context"
      ],
      "answer": [1],
      "explanation": "The concept is choosing RAG over fine-tuning for frequently changing knowledge, and choosing a managed service when there is no ML team. Amazon Bedrock Knowledge Bases connects to sources such as SharePoint and Google Drive and manages parsing, embeddings, storage and retrieval, so answers reflect current documents without retraining. Fine-tuning bakes a snapshot into the model and must be repeated every time policies change. A custom pipeline on Amazon SageMaker AI offers control the company cannot staff. Pasting every document into each prompt would exhaust the context window and multiply token costs."
    },
    {
      "id": "e5-07",
      "domain": 3,
      "skill": "3.1.4",
      "type": "single",
      "difficulty": "medium",
      "question": "A pet insurer's customer assistant, built on Amazon Bedrock, answers coverage questions by retrieving the customer's policy document. Audits found cases where the assistant gave confident answers that were not actually supported by the retrieved policy text. Which Amazon Bedrock Guardrails capability MOST directly addresses this problem?",
      "options": [
        "Denied topics, to stop customers from asking about coverage",
        "Word filters, to block profanity in customer messages",
        "Contextual grounding checks, to detect and filter responses that are not grounded in the retrieved source or not relevant to the query",
        "Sensitive information filters, to mask personal data in the responses"
      ],
      "answer": [2],
      "explanation": "The concept is hallucination detection as a safeguard. Contextual grounding checks in Amazon Bedrock Guardrails compare a response against the retrieved source and the user's query and filter answers that are unsupported or irrelevant, which is precisely the failure described. Denied topics would block legitimate coverage questions, defeating the assistant's purpose. Word filters address profanity and specific phrases, not factual support. Sensitive information filters protect personal data; they say nothing about whether an answer is backed by the policy text."
    },
    {
      "id": "e5-08",
      "domain": 4,
      "skill": "4.1.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A museum's AI readiness assessment, structured around the six AWS Cloud Adoption Framework (AWS CAF) perspectives, found two major weaknesses: curators and front-of-house staff lack AI skills and fear being replaced, and there is no policy for managing AI-related risk or compliance. Which TWO AWS CAF perspectives are MOST directly implicated by these findings? (Select TWO.)",
      "options": [
        "People",
        "Platform",
        "Governance",
        "Operations",
        "Security"
      ],
      "answer": [0, 2],
      "explanation": "AWS CAF organizes capabilities into six perspectives: Business, People, Governance, Platform, Security and Operations. Workforce skills, culture and change acceptance belong to the People perspective, so the skills gap and staff fears sit there. Risk management, compliance and oversight of the program belong to the Governance perspective, so the missing AI risk policy sits there. Platform concerns the technology foundation, which was not flagged. Operations concerns running workloads reliably, and Security concerns protecting data and systems; neither finding is about those areas."
    },
    {
      "id": "e5-09",
      "domain": 2,
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "easy",
      "question": "A charity is preparing a budget request for a donor-communications assistant on Amazon Bedrock. Nothing has been deployed yet, and the finance committee wants a cost estimate based on expected monthly message volumes before approving the pilot. Which AWS tool is MOST appropriate for this task?",
      "options": [
        "AWS Cost Explorer, because it forecasts future spend from billing history",
        "AWS Pricing Calculator, because it models estimated costs from assumed usage before anything is deployed",
        "AWS Marketplace, because it lists the price of every foundation model",
        "Amazon Quick, because it can build a dashboard of projected costs"
      ],
      "answer": [1],
      "explanation": "The concept is cost planning versus cost analysis. AWS Pricing Calculator produces a forward-looking estimate from assumptions such as expected token volumes, which is exactly what a pre-deployment budget request needs. AWS Cost Explorer analyzes and forecasts from actual historical billing data, so it has nothing to work with before deployment. AWS Marketplace is a procurement channel for third-party products, not an estimating tool. Amazon Quick can visualize data, but it does not contain AWS price lists or produce service cost estimates."
    },
    {
      "id": "e5-10",
      "domain": 1,
      "skill": "1.1.6",
      "type": "single",
      "difficulty": "hard",
      "question": "A dental network is evaluating an AI scheduling vendor whose proposal states that the vendor is \"certified to ISO/IEC 23053.\" The AI strategist is asked whether this claim is meaningful. Which response is MOST accurate?",
      "options": [
        "The claim is strong evidence of governance because ISO/IEC 23053 is the certifiable AI management system standard",
        "The claim should be questioned because ISO/IEC 23053 is a descriptive framework and vocabulary for AI systems that use machine learning, whereas ISO/IEC 42001 is the certifiable management system standard",
        "The claim is irrelevant because ISO standards do not apply to AI vendors",
        "The claim proves compliance with the EU AI Act because ISO/IEC 23053 is referenced in that regulation"
      ],
      "answer": [1],
      "explanation": "The concept is the difference between the two ISO/IEC standards named in the exam guide. ISO/IEC 23053 is a framework that describes the components and terminology of an AI system using machine learning; it is a shared vocabulary, not a set of auditable requirements, so organizations are not certified to it. ISO/IEC 42001 is the management system standard that an accredited auditor can certify. Saying ISO standards do not apply to AI vendors is wrong, since 42001 exists for exactly that purpose. No ISO standard automatically proves compliance with the EU AI Act, which is law with its own obligations."
    },
    {
      "id": "e5-11",
      "domain": 3,
      "skill": "3.2.4",
      "type": "single",
      "difficulty": "medium",
      "question": "An e-sports company has adopted the NIST AI Risk Management Framework. It has established accountability and policies, and it has documented the context and potential harms of its player-matchmaking model. The governance lead now wants to define metrics and regularly track the identified risks against them. Which NIST AI RMF function does this next activity correspond to?",
      "options": [
        "Govern",
        "Map",
        "Measure",
        "Manage"
      ],
      "answer": [2],
      "explanation": "The NIST AI RMF organizes AI risk work into four functions: Govern, Map, Measure and Manage. Establishing accountability and policies is Govern, and documenting context and potential harms is Map, both of which the company has done. Defining metrics and tracking identified risks is Measure, the analytic function that quantifies and monitors risk. Manage is the subsequent function in which the organization prioritizes and acts on the measured risks, for example by applying controls or deciding to retire a system. The framework is voluntary and iterative, so these functions repeat across the lifecycle."
    },
    {
      "id": "e5-12",
      "domain": 4,
      "skill": "4.2.3",
      "type": "single",
      "difficulty": "easy",
      "question": "A craft brewery with no infrastructure team wants to add a generative AI assistant that drafts distributor emails and answers product questions. A board member worries that the brewery will need to buy and manage servers. Which statement BEST describes the infrastructure requirement?",
      "options": [
        "Amazon Bedrock is serverless, so the brewery accesses foundation models through a managed API without provisioning or managing infrastructure",
        "Amazon Bedrock requires the brewery to purchase dedicated GPU instances before any model can be used",
        "Generative AI always requires an on-premises data center for latency reasons",
        "The brewery must first build a custom model on Amazon SageMaker AI because foundation models cannot be used directly"
      ],
      "answer": [0],
      "explanation": "The concept is assessing foundational technology requirements. Amazon Bedrock is a serverless, fully managed service that exposes foundation models from several providers through a single API, so an organization without an infrastructure team can start without provisioning servers. Dedicated capacity is an optional pricing choice (Provisioned Throughput), not a prerequisite. Generative AI does not require on-premises hardware; cloud delivery is the norm. Amazon SageMaker AI is the path for building custom models when foundation models do not fit, which is unnecessary for a general drafting and question-answering assistant."
    },
    {
      "id": "e5-13",
      "domain": 2,
      "skill": "2.1.2",
      "type": "multi",
      "difficulty": "hard",
      "question": "A port operator wants to predict crane component failures from ten years of proprietary sensor data that no commercial product covers. It employs three data scientists, has a 12-month runway, and considers the resulting model a competitive differentiator it must own. Which TWO conclusions are MOST appropriate for the build-buy-partner decision? (Select TWO.)",
      "options": [
        "Build the custom model on Amazon SageMaker AI, because the problem needs training on proprietary data and the operator has the skills and time to do so",
        "Rely on a general-purpose foundation model through Amazon Bedrock on-demand pricing, because foundation models can predict mechanical failures without training",
        "Owning the model and its training data preserves the differentiation the operator wants, which a bought product would not provide",
        "Buy a generic predictive-maintenance product from AWS Marketplace because buying is always cheaper than building",
        "Pause the initiative until a vendor publishes a crane-specific product"
      ],
      "answer": [0, 2],
      "explanation": "The concept is weighing build, buy and partner against capabilities, timeline, data and strategic ownership. A proprietary sensor dataset, in-house data scientists, an adequate runway and the desire to own a differentiating asset all point toward building a custom machine learning model, for which Amazon SageMaker AI is the managed platform. Ownership of model and data is what sustains the advantage. A general foundation model is not trained on this equipment's telemetry and is the wrong tool for a specialized predictive task. Buying is not always cheaper, and no generic product covers the data. Waiting indefinitely for a vendor forfeits the opportunity."
    },
    {
      "id": "e5-14",
      "domain": 1,
      "skill": "1.2.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A travel agency has prototyped an AI agent, using an open-source agent framework, that searches fares, calls the agency's booking API and files expense records. Leadership wants to run it in production with secure tool access, session memory and the ability to trace every step the agent took when something goes wrong, without rebuilding it on a different framework. Which AWS offering is designed for this need?",
      "options": [
        "Amazon Bedrock Knowledge Bases, which stores the agent's booking documents",
        "Amazon Bedrock AgentCore, a framework-agnostic and model-agnostic platform for deploying and operating production agents with gateway, identity, memory and observability services",
        "Amazon Quick, which provides a business intelligence dashboard for the agent's results",
        "Amazon SageMaker AI, which trains a custom model to replace the agent"
      ],
      "answer": [1],
      "explanation": "The concept is the difference between an AI agent and other AI solutions, and what an agent platform provides. Amazon Bedrock AgentCore is built for running production agents from any framework with any model, offering a gateway for secure tool and API access, identity for authorization, memory for sessions and observability to trace agent steps. Knowledge Bases supplies retrieval over documents, not agent runtime or tooling. Amazon Quick is a business intelligence and AI assistant suite for people, not an agent hosting platform. Amazon SageMaker AI trains and hosts models; it does not operate agents that use tools."
    },
    {
      "id": "e5-15",
      "domain": 3,
      "skill": "3.3.3",
      "type": "multi",
      "difficulty": "medium",
      "question": "A fashion brand's customer-facing styling assistant on Amazon Bedrock must never produce hateful or sexual content, must never name rival brands, and must not echo back a shopper's payment card number if one is typed in. Which THREE Amazon Bedrock Guardrails capabilities map to these three requirements? (Select THREE.)",
      "options": [
        "Content filters for harmful categories such as hate and sexual content",
        "Word filters to block specified phrases such as competitor names",
        "Sensitive information filters to block or mask personal and financial data",
        "Automated Reasoning checks to prove the styling advice is logically valid",
        "Intelligent prompt routing to send risky prompts to a safer model",
        "Provisioned Throughput to guarantee the filter runs quickly"
      ],
      "answer": [0, 1, 2],
      "explanation": "The concept is managing harmful content and data-leakage risks with configurable safeguards. Amazon Bedrock Guardrails content filters block categories such as hate, insults, sexual content and violence. Word filters block exact words and phrases, which is how competitor names are excluded. Sensitive information filters detect and block or mask personally identifiable and financial data in inputs and outputs. Automated Reasoning checks validate answers against formal rules and are not aimed at harmful content. Intelligent prompt routing is a cost and quality lever that chooses between models; it is not a safety filter. Provisioned Throughput is a capacity pricing option, unrelated to filtering."
    },
    {
      "id": "e5-16",
      "domain": 2,
      "skill": "2.1.4",
      "type": "single",
      "difficulty": "medium",
      "question": "A craft brewery wants to use a generative AI model to produce the legally required allergen and alcohol-content statements printed on every can. The statements are determined entirely by the recipe data and the applicable regulation, and any error exposes the brewery to recalls and fines. What should the AI strategist recommend?",
      "options": [
        "Use generative AI, because it will produce more engaging allergen statements than a template",
        "Do not use AI for this task; generate the statements with deterministic rule-based logic from the recipe data, and reserve generative AI for creative copy",
        "Fine-tune a foundation model on past labels so it learns the regulation",
        "Use generative AI with a human spot-check of one label in every hundred"
      ],
      "answer": [1],
      "explanation": "The concept is recognizing when AI is not the appropriate solution. Mandatory statements that follow fully specified rules with zero tolerance for error are the textbook case for deterministic rule-based automation, which is cheaper, auditable and never hallucinates. Engagement is irrelevant for regulatory text. Fine-tuning a model on past labels still yields a probabilistic system that can produce a wrong statement, and regulations are rules, not patterns to be learned. Spot-checking one in a hundred would let most errors through on a task where a single wrong label triggers a recall."
    },
    {
      "id": "e5-17",
      "domain": 2,
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "medium",
      "question": "A co-working space operator plans to roll out Amazon Quick so that 400 community managers can ask natural-language questions about occupancy data and view dashboards, while 20 analysts will author dashboards and build automated workflows. The CFO asks how the cost will behave. Which statement is MOST accurate?",
      "options": [
        "Amazon Quick is billed per token, so cost will rise with the number of questions asked regardless of how many people use it",
        "Amazon Quick uses per-user subscription pricing with tiers, so cost scales mainly with the number and type of users; the 20 authors need the higher tier that includes dashboard authoring and workflow automation",
        "Amazon Quick is instance-based, so the operator must choose a server size large enough for 420 people",
        "Amazon Quick is free for all users once an AWS account exists"
      ],
      "answer": [1],
      "explanation": "The concept is seat-based pricing. Amazon Quick is sold as per-user monthly subscriptions in tiers, where the Professional tier covers chatting, research and viewing dashboards and the Enterprise tier adds authoring dashboards and multi-step workflow automation. Cost therefore scales with the number and type of licensed users, which lets the CFO plan by headcount. Token-based pricing is how Amazon Bedrock inference is charged, not Amazon Quick. Instance-based pricing applies to services such as Amazon SageMaker AI where you pay for compute hours. Amazon Quick is not free beyond trial allowances; organization plans also carry an account infrastructure fee."
    },
    {
      "id": "e5-18",
      "domain": 1,
      "skill": "1.3.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A language school's tutoring assistant sends the same 40-page course handbook to the model with every student question so the model has context. Monthly costs on Amazon Bedrock are far above forecast and responses are slow. Which explanation and remedy is MOST accurate?",
      "options": [
        "Every call re-sends and re-processes the full handbook as input tokens; prompt caching lets the repeated handbook prefix be reused across calls, lowering input cost and latency",
        "The model is being fine-tuned on each request; switching to on-demand pricing will stop the retraining charges",
        "The handbook is too short for the model to understand; sending more context per question will improve speed",
        "Output tokens are the only cost driver, so shortening the student's questions will fix the problem"
      ],
      "answer": [0],
      "explanation": "The concept is how tokens and context windows drive generative AI cost and performance. Each request is billed on input and output tokens, so repeating a long handbook in every prompt multiplies input charges and processing time. Prompt caching in Amazon Bedrock stores a repeated prompt prefix so later requests reuse it, which AWS describes as reducing cost and latency substantially for supported models. No fine-tuning occurs during inference, so there are no retraining charges to stop. Sending more context would worsen both cost and speed. Input tokens are a major cost component, so trimming only the short questions would barely help."
    },
    {
      "id": "e5-19",
      "domain": 3,
      "skill": "3.2.2",
      "type": "multi",
      "difficulty": "hard",
      "question": "A co-working space operator with sites in the European Union plans to use an AI system that ranks and shortlists job applicants for community-manager roles. Legal has confirmed the system falls into the EU AI Act's high-risk category. Which TWO obligations should the AI strategist expect to apply before deployment? (Select TWO.)",
      "options": [
        "Appropriate human oversight so that a person can review and override the system's rankings",
        "A documented risk management process and conformity assessment demonstrating the system meets the Act's requirements",
        "A total prohibition on using any AI in recruitment within the EU",
        "Only a notice that applicants are interacting with an AI system, with no further obligations",
        "An exemption from obligations because the company is not a technology vendor"
      ],
      "answer": [0, 1],
      "explanation": "The concept is the EU AI Act's risk tiers and the obligations attached to each. Employment and recruitment uses are listed as high-risk, which brings requirements including risk management, data governance, documentation, human oversight and a conformity assessment before placing the system into service. Recruitment AI is not prohibited; the unacceptable tier covers practices such as social scoring and manipulative systems. A mere transparency notice is the obligation for limited-risk systems such as chatbots, which is insufficient here. Deployers as well as providers carry obligations, so being a user rather than a vendor does not confer an exemption."
    },
    {
      "id": "e5-20",
      "domain": 4,
      "skill": "4.1.2",
      "type": "single",
      "difficulty": "easy",
      "question": "A craft brewery's marketing lead has been experimenting with a generative AI tool for social posts for six months. There is no AI strategy, no executive owner, no governance policy and no measurement of results. Where does the brewery sit on a typical AI maturity model, and what is the MOST appropriate next step?",
      "options": [
        "Enterprise-scale deployment; the next step is building an AI center of excellence",
        "Experimentation stage; the next step is to define a strategy, assign an owner and establish basic governance before expanding use",
        "Optimization stage; the next step is to automate the marketing function entirely",
        "Transformation stage; the next step is to change the business model"
      ],
      "answer": [1],
      "explanation": "The concept is applying an AI maturity model to locate an organization on its journey. Isolated, unowned, ungoverned experimentation with no measurement is the experimentation (or ad hoc) stage. The sensible progression is to add the missing foundations of strategy, ownership and governance before scaling. Enterprise-scale deployment implies systematic use across functions, which is far ahead of one person's experiments, so a center of excellence is premature. Optimization and transformation stages assume mature, measured, embedded AI, and fully automating marketing or changing the business model would skip every intermediate capability."
    },
    {
      "id": "e5-21",
      "domain": 2,
      "skill": "2.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A port authority's strategic objective is to cut the average time containers spend waiting for customs clearance. Which AI capability maps MOST directly to that outcome?",
      "options": [
        "A recommendation engine that suggests retail products to port employees",
        "Document extraction that reads bills of lading and customs declarations and pre-populates clearance systems",
        "Generative AI that writes the port's annual report",
        "Computer vision that counts seagulls on the quayside"
      ],
      "answer": [1],
      "explanation": "The concept is mapping AI capabilities to specific business outcomes. Customs clearance is a document-heavy process, so intelligent document extraction that reads shipping paperwork and feeds the clearance workflow directly shortens dwell time. A product recommendation engine is a sales capability unrelated to port operations. Drafting an annual report is a content-generation use that improves communications productivity, not clearance speed. Computer vision could help a port in other ways, such as container damage inspection, but counting birds has no connection to the stated objective."
    },
    {
      "id": "e5-22",
      "domain": 1,
      "skill": "1.1.3",
      "type": "multi",
      "difficulty": "easy",
      "question": "A museum wants to make forty years of exhibition photographs, scanned curator notebooks and a relational database of loan records searchable through a natural-language assistant. Which TWO statements about the relevance of data types are correct? (Select TWO.)",
      "options": [
        "The photographs and scanned notebooks are unstructured data that foundation models and computer vision can process without first forcing them into rows and columns",
        "The loan-records database is structured data that can also be queried, for example through natural-language-to-SQL retrieval",
        "Unstructured data must be converted into spreadsheets before any AI can use it",
        "Structured data cannot be used by AI because it lacks the richness of text",
        "Photographs are structured data because each file has a fixed size"
      ],
      "answer": [0, 1],
      "explanation": "The concept is distinguishing structured from unstructured data and why it matters for AI. Images and free-form notes are unstructured; modern foundation models and computer vision work on them directly, which is why generative AI unlocked so much previously untapped content. Tables with defined columns are structured and remain valuable, and services such as Amazon Bedrock Knowledge Bases can retrieve from structured stores by generating SQL. Unstructured content does not need to be tabularized first. Structured data is the backbone of traditional machine learning, so claiming AI cannot use it is wrong. File size does not make an image structured."
    },
    {
      "id": "e5-23",
      "domain": 3,
      "skill": "3.1.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A charity is considering an AWS AI service for transcribing recorded beneficiary interviews. Before committing, the responsible AI lead wants to understand the intended use cases, known limitations and the responsible AI design choices AWS made for that service. Which resource is designed to provide this information?",
      "options": [
        "The AWS Pricing Calculator estimate for the service",
        "The AWS AI Service Card for the service",
        "An Amazon Bedrock Guardrails policy",
        "The charity's own AWS Cost Explorer report"
      ],
      "answer": [1],
      "explanation": "The concept is transparency as a responsible AI dimension. AWS AI Service Cards are public documents that explain, for a given AWS AI service or model, its intended use cases and limitations, the responsible AI design considerations behind it, and guidance on deployment and performance. That is exactly what the lead wants before adopting the service. AWS Pricing Calculator provides cost estimates and says nothing about fitness or limitations. Amazon Bedrock Guardrails enforces safeguards at run time but does not document a service's intended uses. AWS Cost Explorer reports historical spend."
    },
    {
      "id": "e5-24",
      "domain": 4,
      "skill": "4.2.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A pet insurer formed by three acquisitions wants a claims-fraud model. Each legacy company stores claims in its own system with different breed codes, condition names and policy identifiers, and none can see the others' records. Early model tests on one company's data show promise. What should the AI strategist advise FIRST?",
      "options": [
        "Deploy the model trained on one company's data across all three immediately, because it already shows promise",
        "Assess data readiness across all three estates, including quality, consistency of definitions and accessibility, and address the silos before scaling the model",
        "Buy more data from an external broker so the model does not depend on internal records",
        "Switch to a generative AI chatbot, which does not need structured claims data"
      ],
      "answer": [1],
      "explanation": "The concept is evaluating data readiness and the effect of silos. A fraud model trained on one subsidiary's codes will not generalize to records that use different definitions it has never seen, and inaccessible data cannot feed the model at all. The disciplined step is a readiness assessment covering quality, consistency and accessibility, followed by work to harmonize definitions and open access. Deploying immediately ignores those gaps and risks poor predictions. External data does not fix inconsistent internal records. A chatbot does not perform fraud detection and still depends on reliable data."
    },
    {
      "id": "e5-25",
      "domain": 2,
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "hard",
      "question": "A defence contractor's engineering unit trains and serves custom machine learning models on Amazon SageMaker AI instances that run at a steady, predictable level around the clock, and it expects this to continue for at least two years. Instance types will change as projects evolve. Which cost strategy is MOST appropriate?",
      "options": [
        "Purchase Amazon Bedrock Provisioned Throughput, because it discounts all AWS AI compute",
        "Commit to a SageMaker Savings Plan for a one- or three-year term, which lowers the hourly rate on consistent usage while remaining flexible across instance family, size and Region",
        "Stay on pay-as-you-go pricing because any commitment removes the ability to change instance types",
        "Move the workloads to Amazon Quick to benefit from per-user pricing"
      ],
      "answer": [1],
      "explanation": "The concept is matching a commitment-based discount to steady, predictable instance usage. SageMaker Savings Plans reduce Amazon SageMaker AI costs in exchange for committing to a consistent hourly spend over one or three years, and AWS states they apply regardless of instance family, size or Region, so changing instance types does not forfeit the discount. Amazon Bedrock Provisioned Throughput reserves foundation model capacity in Bedrock only; it does not cover SageMaker instances. Pay-as-you-go is right for unpredictable usage, but the premise that commitments remove flexibility is false here. Amazon Quick is a business intelligence and assistant suite, not a place to run training workloads."
    },
    {
      "id": "e5-26",
      "domain": 1,
      "skill": "1.2.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A museum is reviewing four operational problems. Which one is BEST suited to rule-based automation rather than an AI solution?",
      "options": [
        "Predicting daily visitor numbers from weather, school holidays and marketing activity",
        "Applying the published refund policy, which grants a full refund for cancellations more than 48 hours before a timed entry and no refund otherwise",
        "Identifying which artworks in photographs need conservation attention",
        "Drafting personalized replies to visitor feedback emails"
      ],
      "answer": [1],
      "explanation": "The concept is deciding between rule-based automation and AI. The refund policy is a fully specified, deterministic rule with a clear threshold, so coding it directly is cheaper, transparent and never wrong, whereas a learned model would add uncertainty with no benefit. Visitor forecasting depends on complex, shifting relationships among many variables, which is a prediction task for machine learning. Detecting conservation needs in images is a computer vision task. Drafting personalized replies to free-text emails is a generative AI task. All three of those involve patterns that cannot be captured by a short list of rules."
    },
    {
      "id": "e5-27",
      "domain": 3,
      "skill": "3.1.3",
      "type": "single",
      "difficulty": "medium",
      "question": "An e-sports company is designing a player-behavior moderation model. The CTO proposes waiting until the system is finished and then using the AWS Well-Architected Responsible AI Lens as a pass/fail compliance certification before launch. Which response from the AI strategist is MOST accurate?",
      "options": [
        "Agree, because the Responsible AI Lens is an AWS certification that regulators accept in place of their own requirements",
        "Disagree; the Lens is advisory guidance organized as focus areas aligned to the machine learning lifecycle, with questions and best practices meant to shape design decisions from the start, and AWS states it is not a compliance checklist",
        "Disagree; the Lens only applies to foundation models built by AWS, so it is irrelevant to a custom moderation model",
        "Agree, because responsible AI considerations only matter once a system is in production"
      ],
      "answer": [1],
      "explanation": "The concept is governance by design, meaning responsible AI practices are integrated throughout planning rather than bolted on at the end. The Responsible AI Lens is structured as focus areas aligned to lifecycle phases, each with questions answered by best practices across dimensions such as fairness, explainability, privacy, safety, controllability and veracity. AWS explicitly says it should not be used as a compliance or assurance checklist, and it is not a certification regulators accept. It is aimed at teams building solutions for specific use cases, not only AWS-built foundation models. Deferring responsible AI until production is the opposite of governance by design."
    },
    {
      "id": "e5-28",
      "domain": 4,
      "skill": "4.4.5",
      "type": "multi",
      "difficulty": "hard",
      "question": "A travel agency's itinerary assistant succeeded as an experiment run by two developers on a shared account with no logging, no defined owner and no fallback if the model is unavailable. Leadership wants it customer-facing within a quarter. Which TWO requirements MUST be addressed to move it to production grade? (Select TWO.)",
      "options": [
        "Assign a named business owner and define operational responsibilities, including monitoring, incident escalation and a fallback path for customers when the assistant fails",
        "Apply production governance, including access controls, guardrails on outputs, logging for audit, and a review of data handling against privacy obligations",
        "Keep the experiment's configuration unchanged so that the proven behavior is preserved exactly",
        "Remove all human review so the assistant can scale without staffing constraints",
        "Switch the assistant to a seat-based pricing model so costs are predictable"
      ],
      "answer": [0, 1],
      "explanation": "The concept is the transition from experimental to production-grade AI, which adds governance and operational requirements that a prototype never had. Production needs clear ownership, monitoring, escalation and business continuity through a fallback, plus security, guardrails, auditable logging and privacy review. Freezing the prototype's configuration preserves the very gaps that make it unfit for customers. Removing human review increases risk at the moment exposure grows. Pricing model choice depends on usage pattern and the service used; a customer-facing assistant on a foundation model is consumption-based, and changing pricing does not make a system production-ready."
    },
    {
      "id": "e5-29",
      "domain": 2,
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "medium",
      "question": "A fashion retailer's shopping assistant on Amazon Bedrock sends every request, from \"what are your opening hours?\" to detailed outfit planning, to the largest and most expensive model in a model family. Quality is good, but the CFO wants lower inference spend without a visible drop in answer quality. Which Amazon Bedrock capability is designed for this situation?",
      "options": [
        "Intelligent prompt routing, which predicts per request which model in the family will answer well and sends simpler prompts to a cheaper model",
        "Provisioned Throughput, which lowers the per-token price of the largest model",
        "Contextual grounding checks, which reduce the number of tokens the model generates",
        "Batch inference, which answers shoppers' questions in overnight batches at a discount"
      ],
      "answer": [0],
      "explanation": "The concept is a cost optimization lever for mixed-complexity traffic. Intelligent prompt routing in Amazon Bedrock evaluates each prompt and routes it to the model within a family that is predicted to meet quality at the lowest cost, which AWS describes as reducing costs by up to about 30 percent without compromising accuracy. Provisioned Throughput buys reserved capacity at an hourly rate for predictable high volume; it does not make the largest model cheaper per request for mixed traffic. Contextual grounding is a hallucination safeguard, not a cost control. Batch inference is discounted but cannot serve live shoppers waiting for an answer."
    },
    {
      "id": "e5-30",
      "domain": 1,
      "skill": "1.1.4",
      "type": "single",
      "difficulty": "medium",
      "question": "A craft brewery trained a demand model on five years of order data. Investigation shows the training data contains duplicated orders from a billing-system migration, product names spelled three different ways, and a year where keg returns were never recorded. The model's forecasts are erratic. What is the MOST accurate diagnosis and action?",
      "options": [
        "The model algorithm is too simple; buy a larger foundation model",
        "Poor data quality is propagating into poor predictions; clean, deduplicate and standardize the training data and fill or flag the gap before retraining",
        "The model needs more years of the same data so the errors average out",
        "Forecasting beer demand is impossible with AI; return to manual planning"
      ],
      "answer": [1],
      "explanation": "The concept is that data quality determines AI outcomes: duplicates inflate apparent demand, inconsistent names fragment the same product into several series, and a missing year of returns biases the signal. The remedy is to fix accuracy, consistency and completeness in the data and then retrain. Swapping in a larger or generative model does not correct flawed inputs; it learns the same errors. Adding more years of equally flawed data compounds rather than averages the problems. Demand forecasting is a well-established machine learning use, so abandoning it is unwarranted once the data is sound."
    },
    {
      "id": "e5-31",
      "domain": 3,
      "skill": "3.3.1",
      "type": "multi",
      "difficulty": "medium",
      "question": "A port authority's vessel-scheduling assistant has been live on Amazon Bedrock for a month. Leadership assumed the managed service would handle risk after launch, but no one is watching the system. Which TWO production risk controls should the AI strategist insist on? (Select TWO.)",
      "options": [
        "Ongoing monitoring of output quality and guardrail interventions, with periodic human review of samples",
        "Defined thresholds and escalation paths that trigger human intervention or rollback when quality, cost or safety metrics deviate",
        "Reliance on AWS to detect and correct wrong scheduling recommendations, since Amazon Bedrock is managed",
        "Disabling all logging to reduce storage cost now that the pilot is over",
        "Switching the model to a larger size so that monitoring becomes unnecessary"
      ],
      "answer": [0, 1],
      "explanation": "The concept is the need for risk controls and monitoring mechanisms once an AI system is in production, which the shared responsibility model leaves with the customer. Continuous monitoring of outputs, guardrail hit rates and sampled human review surfaces problems; thresholds with escalation and rollback ensure someone acts on them. AWS operates the service infrastructure but does not judge whether a scheduling recommendation is correct for the port. Disabling logging removes the audit trail needed to investigate incidents. A larger model can still produce wrong or drifting outputs, so model size never replaces monitoring."
    },
    {
      "id": "e5-32",
      "domain": 4,
      "skill": "4.3.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A national charity's AI program is sponsored only by the head of IT. Program directors see AI as an IT matter, volunteers are not engaged, and two pilots have stalled waiting for business decisions. Which leadership action is MOST likely to restore momentum?",
      "options": [
        "Secure visible sponsorship from the chief executive and program directors, and appoint AI champions inside each program to own adoption",
        "Transfer the pilots entirely to the IT department so they can be finished without business involvement",
        "Pause all AI work until a five-year technology roadmap is complete",
        "Hire an external consultancy to run the pilots on the charity's behalf"
      ],
      "answer": [0],
      "explanation": "The concept is executive sponsorship and leadership alignment, with empowered champions sustaining momentum. When sponsorship sits only with IT, business leaders disengage and decisions stall; broad executive sponsorship plus champions embedded in the programs gives the pilots owners who can make business decisions. Handing everything to IT deepens the perception that AI is a technology project and removes the users who must adopt it. Pausing for a long roadmap kills momentum rather than restoring it. Outsourcing the pilots does not create internal ownership and leaves the alignment problem unsolved."
    },
    {
      "id": "e5-33",
      "domain": 2,
      "skill": "2.1.5",
      "type": "multi",
      "difficulty": "hard",
      "question": "A co-working space operator is moving its member-support assistant from a vendor-hosted platform to Amazon Bedrock before the vendor contract expires in four months. Which TWO considerations are MOST important when planning the transition? (Select TWO.)",
      "options": [
        "Run the new assistant in parallel with the old one and define acceptance criteria so service to members continues without interruption",
        "Re-evaluate prompts, guardrails and response quality on the new model, and model the cost under consumption-based token pricing rather than assuming the old subscription cost carries over",
        "Assume the existing prompts will behave identically on any foundation model, so no testing is needed",
        "Delay all data readiness work until after the migration because the model does not depend on the company's documents",
        "Choose the single most expensive model available to guarantee the transition succeeds"
      ],
      "answer": [0, 1],
      "explanation": "The concept is evaluating business continuity, performance impact, cost implications and data readiness when transitioning between AI platforms. A parallel run with acceptance criteria protects members during cutover, and because models differ, prompts and safeguards must be re-tested while costs are re-modeled under Amazon Bedrock's consumption pricing. Assuming identical prompt behavior across models is a common and costly mistake. Data readiness cannot wait, since a support assistant depends on the policy documents it retrieves. Picking the most expensive model is not a continuity strategy and ignores cost optimization options such as routing to smaller models."
    },
    {
      "id": "e5-34",
      "domain": 1,
      "skill": "1.3.3",
      "type": "single",
      "difficulty": "hard",
      "question": "An e-sports organization wants a commentary assistant that writes in the organization's distinctive tone and jargon, which rarely changes, and also cites live match statistics that update every few seconds. Which model adaptation approach BEST meets both needs?",
      "options": [
        "Fine-tune a foundation model on both the house style and historical match statistics so everything is inside the model",
        "Use fine-tuning for the stable tone and jargon, and Retrieval Augmented Generation (RAG) to pull current match statistics at request time",
        "Use RAG for the tone and fine-tuning for the live statistics",
        "Rely only on a longer prompt that contains the style guide and today's statistics"
      ],
      "answer": [1],
      "explanation": "The concept is matching adaptation technique to the nature of the need. Fine-tuning changes how a model writes, so it suits a stable house style and vocabulary. RAG retrieves current facts at request time without retraining, so it suits rapidly changing statistics. Fine-tuning on live statistics would be obsolete within seconds of training and cannot keep pace. Reversing the roles asks retrieval to impose style, which it does poorly, and asks training to deliver freshness, which it cannot. A prompt-only approach can inject today's statistics but struggles to enforce consistent voice at scale and raises per-request token costs."
    },
    {
      "id": "e5-35",
      "domain": 3,
      "skill": "3.2.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A dental network with 90 practices is creating an AI governance committee to oversee clinical note summarization and patient-recall models. The proposed committee consists of five data scientists chaired by the head of analytics, with decisions made by the chair. Which change is MOST important?",
      "options": [
        "Add cross-functional representation from clinical leadership, compliance, privacy, legal and practice operations, and define clear accountability for approval decisions",
        "Reduce the committee to the head of analytics alone to speed up decisions",
        "Replace the data scientists with external auditors who meet once a year",
        "Keep the structure but require all decisions to be unanimous"
      ],
      "answer": [0],
      "explanation": "The concept is governance structures with appropriate cross-functional representation and clear accountability. Decisions about clinical AI affect patient safety, privacy and regulation, so clinicians, compliance, privacy, legal and operations must be in the room, and ownership of approvals must be explicit. A single-person body concentrates risk and lacks the perspectives needed. Annual external audit is a useful check but cannot replace a standing body that oversees the lifecycle. Mandating unanimity among a group drawn from one discipline does nothing to add missing expertise and tends to stall decisions."
    },
    {
      "id": "e5-36",
      "domain": 4,
      "skill": "4.3.3",
      "type": "single",
      "difficulty": "easy",
      "question": "A museum will introduce an AI assistant that answers routine visitor questions. Front-of-house staff have heard rumors that half the team will be cut, and no one has told them anything official. Which communication approach is MOST appropriate?",
      "options": [
        "Say nothing until the system is live to avoid causing alarm before the facts are final",
        "Communicate early and transparently about the timeline, the expected effect on roles, which tasks the assistant will take, and how staff will be supported or retrained",
        "Announce that no jobs will ever change as a result of AI, regardless of outcomes",
        "Delegate all communication to the vendor supplying the assistant"
      ],
      "answer": [1],
      "explanation": "The concept is transparent communication strategies that address workforce concerns. Silence allows rumors to fill the gap and erodes trust, so leadership should explain the timeline, intended scope, impact on roles and support offered. Waiting until launch leaves staff anxious for months and damages adoption. A blanket promise that nothing will change is not credible and would be remembered if roles do evolve. The vendor has no standing with employees and no accountability for their futures; workforce communication is a leadership responsibility."
    },
    {
      "id": "e5-37",
      "domain": 2,
      "skill": "2.3.2",
      "type": "single",
      "difficulty": "medium",
      "question": "A pet insurer currently sells annual policies and pays claims after treatment. It has rich data on pet health, breeds and claims, and strong AI capability. Which option BEST represents an AI-enabled business model transformation rather than an operational improvement?",
      "options": [
        "Using AI to process existing claims 40 percent faster",
        "Launching a subscription pet-wellness service that uses predictive models to recommend preventive care and dynamically adjusts pricing, turning the insurer into a proactive health partner",
        "Automating the drafting of renewal letters with generative AI",
        "Replacing the call-center IVR menu with a voice assistant"
      ],
      "answer": [1],
      "explanation": "The concept is identifying opportunities to transform business models with AI, as opposed to making the current model more efficient. A predictive wellness subscription changes what the company sells, how it earns revenue and its relationship with customers, which is a new value proposition built on its data advantage. Faster claims processing, automated letters and a better voice assistant are all valuable, but each improves an existing process inside the same model of selling annual policies and paying claims; they are operational improvements."
    },
    {
      "id": "e5-38",
      "domain": 1,
      "skill": "1.1.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A travel agency's finance team sees two very different AI cost lines: a large one-off charge when the data science team built the package-recommendation model, and a smaller charge that recurs every month and rises with website traffic. Which explanation of these two costs is MOST accurate?",
      "options": [
        "The one-off charge was inference and the recurring charge is training, which happens every time a customer visits",
        "The one-off charge was training, where the model learned patterns from historical bookings, and the recurring charge is inference, where the deployed model makes a prediction for each visitor",
        "Both charges are training because the model must be rebuilt for every recommendation",
        "Both charges are licensing fees that have nothing to do with how the model works"
      ],
      "answer": [1],
      "explanation": "The concept is the difference between training and inference and why it matters to budgets. Training is the periodic, compute-intensive process in which a model learns from historical data, so it appears as a large occasional cost. Inference is the use of the trained model to make predictions on new inputs, so it recurs and scales with usage such as site visits. Reversing the two misreads how models work, since a model is not retrained per visitor. Models are not rebuilt for each recommendation. Treating both as licensing ignores the usage-driven behavior finance observed."
    },
    {
      "id": "e5-39",
      "domain": 3,
      "skill": "3.1.4",
      "type": "single",
      "difficulty": "hard",
      "question": "A defence contractor (handling only non-sensitive HR matters) wants an assistant that answers employee questions about leave entitlement, where the rules are written as precise policy conditions. The HR director requires that answers be verifiably consistent with the written rules, not merely similar to a source paragraph, and that the system flag unstated assumptions. Which Amazon Bedrock Guardrails capability BEST meets this requirement?",
      "options": [
        "Contextual grounding checks, which score whether a response is supported by retrieved text",
        "Automated Reasoning checks, which validate responses against formally encoded policy rules, suggest corrections and highlight unstated assumptions",
        "Word filters, which block specific phrases that conflict with policy",
        "Denied topics, which prevent the assistant from discussing leave at all"
      ],
      "answer": [1],
      "explanation": "The concept is choosing the right safeguard for a hallucination risk defined by rule compliance. Automated Reasoning checks in Amazon Bedrock Guardrails encode policies as logical rules and verify responses against them, suggesting corrections and surfacing assumptions, which AWS describes as validating with very high accuracy. Contextual grounding checks test whether an answer is supported by a retrieved passage, which is weaker when correctness depends on applying conditions rather than matching text. Word filters only match phrases and cannot judge logic. Denied topics would block the assistant's core purpose."
    },
    {
      "id": "e5-40",
      "domain": 4,
      "skill": "4.4.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A port group operates six terminals. Each has built its own berth-planning model with different vendors, prompt standards and risk reviews, and successful practices are never shared. The group wants to scale AI consistently without stripping the terminals of local decision-making. Which structure is MOST appropriate?",
      "options": [
        "A central AI team that takes over all terminal projects and removes local teams",
        "An AI center of excellence that sets shared standards, curates reusable assets, provides expertise and runs a community of practice, while terminals keep ownership of their use cases",
        "No central function; let each terminal continue independently to preserve autonomy",
        "An outsourced vendor that builds all future models for the group"
      ],
      "answer": [1],
      "explanation": "The concept is establishing an AI center of excellence and cross-functional collaboration mechanisms to support scaling. A center of excellence provides common standards, reusable components, governance guidance and knowledge sharing while leaving business units accountable for their own outcomes, which solves duplication without centralizing control. Absorbing every project into one central team destroys the local ownership that drives adoption. Continuing with no coordination preserves the fragmentation and repeated mistakes. An outsourced vendor builds things but does not create the internal capability and shared practice that scaling requires."
    },
    {
      "id": "e5-41",
      "domain": 2,
      "skill": "2.2.3",
      "type": "multi",
      "difficulty": "hard",
      "question": "A language school is building a three-year ROI model comparing two options for a tutoring assistant: a vendor product priced per teacher seat, and a solution built on Amazon Bedrock priced on tokens consumed. Usage is expected to grow sharply as more students enroll. Which TWO statements should the ROI model reflect? (Select TWO.)",
      "options": [
        "Seat-based cost scales with the number of licensed teachers regardless of how many student interactions occur, so heavy usage per seat does not raise the vendor cost",
        "Consumption-based cost scales with interactions and token volumes, so growth in student usage raises Amazon Bedrock cost unless levers such as prompt caching, routing or batch processing are applied",
        "Both pricing structures produce identical cost curves, so only features should be compared",
        "Token-based pricing is always cheaper than seat-based pricing at any usage level",
        "Seat-based pricing should be excluded from ROI because it is not an AWS pricing structure"
      ],
      "answer": [0, 1],
      "explanation": "The concept is calculating ROI using a comprehensive framework that models how each pricing structure behaves over time. Seat-based pricing is driven by headcount, which makes it predictable and favorable when a few users generate heavy usage. Consumption-based pricing tracks actual interactions and tokens, which rewards low usage but requires cost controls as volumes grow. The two curves clearly diverge, so comparing features alone would mislead. Neither structure is universally cheaper; the crossover depends on usage per seat. Seat-based pricing is a recognized AWS pricing structure too, as Amazon Quick demonstrates, so it belongs in the comparison."
    },
    {
      "id": "e5-42",
      "domain": 1,
      "skill": "1.2.4",
      "type": "single",
      "difficulty": "medium",
      "question": "An e-sports organization maintains an AI tool register with three classifications: approved, blocked and under evaluation. A coaching team asks to use a new video-analysis AI tool that is not on the register. The IT lead wants to block it automatically because it is unknown. What should the AI strategist recommend?",
      "options": [
        "Block it permanently, because any tool not already approved is a shadow AI risk",
        "Place it in the under-evaluation category, run a time-boxed assessment against published criteria such as data handling and terms, and then move it to approved or blocked with the outcome communicated to staff",
        "Approve it immediately so the team is not slowed down",
        "Let the coaching team use it quietly without recording it in the register"
      ],
      "answer": [1],
      "explanation": "The concept is transparent classification of AI tools to mitigate shadow AI. An under-evaluation category exists precisely so new tools can be assessed against clear criteria within a known timeframe, which keeps the process credible and discourages employees from working around it. Blocking every unknown tool permanently drives usage underground and creates the shadow AI the register aims to prevent. Approving without assessment exposes the organization to unvetted data handling. Allowing quiet unrecorded use defeats the purpose of transparency and leaves risks invisible."
    },
    {
      "id": "e5-43",
      "domain": 3,
      "skill": "3.3.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A dental network's appointment no-show model was trained on records in which front-desk staff at some practices routinely marked late-arriving patients from one neighborhood as no-shows. The model now flags patients from that area for double-booking far more often. At which stage of the AI lifecycle did this bias enter, and what does that imply?",
      "options": [
        "At deployment, implying the only fix is to switch to a different foundation model",
        "During data collection and labeling, implying bias must be examined at every stage of the lifecycle and monitored for drift after launch, not just tested once at model validation",
        "During inference, implying the model should run less often",
        "Nowhere; the model is simply reporting an accurate pattern that requires no action"
      ],
      "answer": [1],
      "explanation": "The concept is that bias can enter at multiple stages of the AI lifecycle, including how data is collected and labeled, and that it must be managed continuously. Inconsistent labeling encoded a human practice into the training labels, so the model learned to penalize a neighborhood. Recognizing this stage shows why fairness checks are needed from data through monitoring, with ongoing watch for bias drift as practices and populations change. The problem predates deployment, so changing models would not remove it from the data. Running inference less often does not change what the model learned. Treating a labeling artifact as an accurate pattern would entrench unfair treatment."
    },
    {
      "id": "e5-44",
      "domain": 4,
      "skill": "4.1.3",
      "type": "single",
      "difficulty": "hard",
      "question": "A craft brewery's AI initiative has cloud infrastructure in place and a trained data analyst, but there is no process for prioritizing use cases, no one is accountable for approving models, and brewers do not trust the forecasts. The owner wants to invest in a bigger server. Which capability gaps are MOST important to close, and why is the proposed investment misdirected?",
      "options": [
        "Process and governance gaps, plus a people gap in trust and adoption; the technology dimension is already adequate, so more hardware addresses the wrong gap",
        "A technology gap; the server will make the forecasts accurate enough that brewers trust them",
        "Only a people gap; hiring more analysts will create process and governance automatically",
        "No gaps; a brewery of this size does not need governance"
      ],
      "answer": [0],
      "explanation": "The concept is identifying capability gaps across people, process, technology and governance. The brewery's weaknesses are a missing prioritization process, absent model-approval accountability (governance), and a lack of trust (people and culture); infrastructure is not the constraint. Spending on hardware improves a dimension that is already sufficient. Accuracy and trust are not fixed by compute, and distrust often stems from opaque processes rather than raw performance. Adding analysts does not create processes or accountability by itself. Governance scales with the risk of decisions, not company size, and forecasts that drive production need it."
    },
    {
      "id": "e5-45",
      "domain": 2,
      "skill": "2.1.3",
      "type": "multi",
      "difficulty": "medium",
      "question": "A museum's AI steering group is reviewing three initiatives. The visitor-flow model delivers measured value, has an engaged owner and aligns with the strategy to reduce queuing. The artwork-captioning tool works technically but its champion has left and no department wants it. The donor-prediction model shows promise but its data source will be unavailable for six months during a system migration. Which TWO decisions are MOST appropriate? (Select TWO.)",
      "options": [
        "Scale the visitor-flow model",
        "Pause the donor-prediction model until its data source is restored, with a defined restart condition",
        "Scale the artwork-captioning tool because it already works technically",
        "Terminate the visitor-flow model because it has already delivered its value",
        "Fund all three equally to avoid internal politics"
      ],
      "answer": [0, 1],
      "explanation": "The concept is prioritizing initiatives on business value, feasibility, sustainability and strategic alignment, with explicit scale, pause or terminate decisions. The visitor-flow model scores well on every criterion and should be scaled. The donor model is strategically promising but temporarily infeasible, which is the textbook case for a pause with a restart trigger. Technical success is not sufficient to scale the captioning tool when no business owner will sustain it; it should be paused or terminated rather than scaled. Terminating a proven, aligned initiative is backwards. Equal funding ignores the evidence and dilutes resources."
    },
    {
      "id": "e5-46",
      "domain": 1,
      "skill": "1.3.1",
      "type": "multi",
      "difficulty": "easy",
      "question": "A travel agency's consultants use a generative AI assistant to draft itineraries, but outputs vary wildly in length, tone and structure, and often ignore the client's budget. The prompt currently reads: \"Make an itinerary for Italy.\" Which TWO prompt engineering changes are MOST likely to improve results? (Select TWO.)",
      "options": [
        "State the role and audience, the required structure and length, and constraints such as the client's budget and travel dates",
        "Provide one or two examples of itineraries in the agency's preferred format",
        "Shorten the prompt further so the model has more freedom",
        "Ask the model to ignore any budget so it can suggest the best options",
        "Repeat the same prompt several times and pick the longest response"
      ],
      "answer": [0, 1],
      "explanation": "The concept is applying basic prompt engineering principles: clarity, context, constraints and examples. Specifying role, audience, structure, length and the client's constraints removes the ambiguity that produces inconsistent output, and few-shot examples show the model the expected format and tone. Shortening an already vague prompt increases variability rather than reducing it. Telling the model to ignore the budget makes the core failure worse. Rerunning the prompt and choosing the longest answer confuses length with quality and wastes tokens."
    },
    {
      "id": "e5-47",
      "domain": 3,
      "skill": "3.2.2",
      "type": "single",
      "difficulty": "hard",
      "question": "An e-sports team based in the European Union wants to install cameras that use AI to infer the emotional state of salaried players during training sessions so coaches can adjust workloads. Which assessment under the EU AI Act is MOST accurate?",
      "options": [
        "It is minimal risk because it is used only internally",
        "It is a limited-risk system that only requires telling players a camera is present",
        "Emotion recognition of individuals in the workplace falls within the Act's prohibited practices, so the use case should not proceed as designed regardless of consent forms",
        "It is high risk and can proceed after a conformity assessment"
      ],
      "answer": [2],
      "explanation": "The concept is applying EU AI Act risk tiers to a concrete business process. The Act's unacceptable-risk tier bans certain practices outright, and AI systems that infer emotions of people in the workplace are among the prohibited uses, with narrow exceptions for medical or safety purposes that a coaching application does not meet. Internal use does not reduce the tier. Transparency notices apply to limited-risk systems such as chatbots, not to banned practices. A conformity assessment is the route for high-risk systems; it cannot legitimize a prohibited one. Prohibitions were among the first provisions of the Act to apply."
    },
    {
      "id": "e5-48",
      "domain": 4,
      "skill": "4.3.6",
      "type": "single",
      "difficulty": "medium",
      "question": "A port's customs-documentation team of 30 clerks currently keys data from shipping documents by hand. An AI extraction system will capture most fields automatically with a confidence score. Leadership must decide how the clerks' roles change. Which approach BEST balances human strengths with AI capabilities?",
      "options": [
        "Redeploy clerks to review low-confidence extractions, handle exceptions and disputes with shippers, and feed corrections back to improve the system",
        "Keep every clerk re-keying every document in parallel with the AI to be safe",
        "Dismiss the entire team on launch day because the AI handles most fields",
        "Have clerks approve every extracted field manually, including high-confidence ones"
      ],
      "answer": [0],
      "explanation": "The concept is transitioning roles from manual operations to human oversight and collaboration with AI. Focusing people on low-confidence cases, exceptions and shipper relationships applies judgment, negotiation and contextual knowledge where machines are weakest, while their corrections improve the model over time. Duplicating every document manually discards the efficiency gain entirely. Dismissing the whole team on launch loses the oversight capacity the system still needs and ignores the exception workload. Approving every high-confidence field one by one reinstates the bottleneck without adding value."
    },
    {
      "id": "e5-49",
      "domain": 2,
      "skill": "2.2.5",
      "type": "single",
      "difficulty": "medium",
      "question": "A dental network is budgeting for Amazon Bedrock Guardrails on a patient-messaging assistant that will process a high volume of text. The finance team wants to understand what drives the Guardrails line item. Which statement is MOST accurate for cost planning?",
      "options": [
        "Guardrails is a flat monthly license per application regardless of usage",
        "Guardrails cost is consumption-based, driven by the volume of text evaluated and the number of chargeable policies applied, while some filters such as word filters carry no charge",
        "Guardrails is billed per user seat like Amazon Quick",
        "Guardrails cost is included in the instance-hour rate of the foundation model"
      ],
      "answer": [1],
      "explanation": "The concept is basic cost factor planning for AI safeguards. Amazon Bedrock Guardrails is priced on consumption: chargeable policy types are billed on the quantity of text (or images) assessed, so cost grows with message volume and with how many paid policies are enabled, and AWS lists certain filters, such as word and regex-based filters, at no additional charge. There is no flat per-application license. Per-seat pricing is the Amazon Quick model, not a Bedrock feature. Foundation model inference on Bedrock is token-priced, not instance-hour priced, and Guardrails is metered separately from model inference."
    },
    {
      "id": "e5-50",
      "domain": 1,
      "skill": "1.2.3",
      "type": "single",
      "difficulty": "easy",
      "question": "A fashion retailer's size-recommendation model was accurate at launch. Three months after the retailer switched to a new supplier whose garments run small, return rates for wrong sizes have doubled, yet the model has not been touched. Which explanation BEST describes what happened and what is required?",
      "options": [
        "The model has a software bug that appeared spontaneously; reinstall it",
        "The relationship between inputs and outcomes changed, so the model drifted; AI systems need ongoing monitoring of performance and periodic retraining when the real world shifts",
        "Customers have become worse at choosing sizes; the model is fine",
        "Models improve automatically over time, so the problem will correct itself"
      ],
      "answer": [1],
      "explanation": "The concept is model drift and the need for ongoing monitoring and updates. The model learned sizing relationships from the old supplier's garments; when the garments changed, those relationships no longer held, so accuracy decayed even though the code was unchanged. Detecting this requires monitoring business outcomes such as return rates and retraining on current data. Nothing spontaneously broke in the software, so reinstalling does nothing. Blaming customers ignores the measurable change in the product. Deployed models do not improve on their own; without intervention they only degrade as conditions shift."
    },
    {
      "id": "e5-51",
      "domain": 3,
      "skill": "3.3.4",
      "type": "multi",
      "difficulty": "medium",
      "question": "A charity's donor-facing assistant occasionally invents program statistics and quotes impact figures that do not exist in any report. Trustees want to keep the assistant but make its answers reliable. Which TWO measures are MOST effective? (Select TWO.)",
      "options": [
        "Ground responses in the charity's published reports through a managed Retrieval Augmented Generation (RAG) layer such as Amazon Bedrock Knowledge Bases, so figures come from retrieved documents",
        "Apply guardrail checks that filter responses not grounded in the retrieved source, and route uncertain answers to a human",
        "Increase the model's creativity setting so answers are more engaging",
        "Remove all source documents so the model relies on its general knowledge",
        "Ask the model to promise in its system prompt that it will never make mistakes"
      ],
      "answer": [0, 1],
      "explanation": "The concept is mitigating hallucination, a core AI reliability risk. Retrieval grounds the model's answers in verified documents and allows citations, and contextual grounding checks plus human escalation catch answers that stray from the source. Raising creativity settings makes fabrication more likely, not less. Removing documents leaves the model with nothing but general training knowledge, which is exactly the condition that produced invented statistics. A promise in the prompt is not a control; language models cannot guarantee their own accuracy, so reliability must come from grounding and verification."
    },
    {
      "id": "e5-52",
      "domain": 4,
      "skill": "4.4.2",
      "type": "single",
      "difficulty": "easy",
      "question": "A language school wants AI embedded across admissions, teaching, marketing and finance within three years. Its CEO prefers to launch everything simultaneously so that no department feels left out. Which scaling approach is MORE likely to succeed?",
      "options": [
        "Launch all four areas at once with equal budgets",
        "Start with one or two short-term wins in high-value, low-complexity areas, use the results to build credibility and reusable assets, and expand in waves",
        "Wait until every department's data is perfect before starting anything",
        "Outsource the whole program and skip internal pilots"
      ],
      "answer": [1],
      "explanation": "The concept is scaling methodologies that start with short-term wins and build toward enterprise-wide deployment. Early visible wins create sponsorship, teach the organization what works, and produce reusable components that make later waves cheaper and faster. Launching everything at once spreads scarce skills thin and multiplies the chance of visible failures. Waiting for perfect data delays value indefinitely, since data is improved through use. Outsourcing without internal pilots skips the learning and ownership that make adoption stick."
    },
    {
      "id": "e5-53",
      "domain": 2,
      "skill": "2.3.1",
      "type": "single",
      "difficulty": "medium",
      "question": "A regional craft brewery learns that two national competitors now use AI to personalize taproom offers and forecast demand by store. The brewery's board asks whether it should respond. Which assessment is the MOST useful starting point?",
      "options": [
        "Copy the competitors' tools immediately, since matching them is the only way to stay relevant",
        "Analyze where AI could create an advantage given the brewery's own strengths, such as local customer relationships and direct taproom data, and where it merely needs to reach parity",
        "Ignore the competitors because craft beer customers do not care about technology",
        "Invest the full marketing budget in AI to signal innovation to investors"
      ],
      "answer": [1],
      "explanation": "The concept is assessing the competitive landscape and identifying where AI adoption confers advantage. A sound assessment distinguishes capabilities needed for parity from those that exploit unique assets, such as a proprietary relationship with local drinkers, which competitors cannot replicate. Copying tools without that analysis yields parity at best and wastes money at worst. Dismissing the competitive signal ignores evidence that rivals are improving pricing and availability, which customers do notice. Spending the entire budget to signal innovation is investment without a value hypothesis."
    },
    {
      "id": "e5-54",
      "domain": 1,
      "skill": "1.1.5",
      "type": "single",
      "difficulty": "medium",
      "question": "A museum trains a visitor-flow model on three years of turnstile data. One of those years was dominated by extended closures and capacity caps that no longer apply. The data science lead wants to retain that year because it is real data. Which statement about training on historical data is MOST accurate?",
      "options": [
        "All historical data is equally useful because more rows always improve a model",
        "A model learns the patterns in its training data, so including a period whose conditions will not recur risks teaching the model relationships that no longer hold; the data should be excluded, down-weighted or flagged",
        "The model will automatically recognize that the closure year was unusual",
        "Historical data is irrelevant because the model only needs real-time inputs"
      ],
      "answer": [1],
      "explanation": "The concept is how models learn from historical data and why representativeness matters. A model generalizes from the patterns it is shown; a year of closures teaches relationships between dates, weather and attendance that reflect a regime that has ended. Including it uncritically distorts future predictions, so the period should be excluded, down-weighted or marked with a feature. More rows help only when they represent the conditions the model will face. Models do not know a period was unusual unless told. Real-time inputs are used at inference, but the model's knowledge still comes from historical training data."
    },
    {
      "id": "e5-55",
      "domain": 3,
      "skill": "3.1.2",
      "type": "single",
      "difficulty": "hard",
      "question": "A pet insurer's underwriting team proposes an AI system that scrapes owners' public social media to detect undisclosed pre-existing conditions before approving claims. Loss-ratio modeling shows a strong financial benefit. The responsible AI lead objects on privacy and transparency grounds. How should the AI strategist navigate the tradeoff?",
      "options": [
        "Approve the proposal because the financial benefit outweighs the principles",
        "Reject the covert scraping, and pursue the underwriting goal through methods customers are told about and consent to, such as veterinary records provided at onboarding, accepting a smaller but sustainable benefit",
        "Approve the proposal but keep it secret from customers to avoid complaints",
        "Reject all AI use in underwriting permanently"
      ],
      "answer": [1],
      "explanation": "The concept is navigating tradeoffs when business objectives conflict with responsible AI principles, here privacy and transparency. Covertly collecting personal data for adverse decisions violates both principles, invites regulatory and reputational harm, and undermines customer trust, which makes the modeled benefit unsustainable. The responsible path keeps the legitimate goal and changes the method to one that is disclosed and consented. Letting finances override principles, or hiding the practice, converts a tradeoff into a liability. Banning all AI in underwriting discards legitimate uses and is not what the principles require."
    },
    {
      "id": "e5-56",
      "domain": 4,
      "skill": "4.2.2",
      "type": "multi",
      "difficulty": "medium",
      "question": "A port wants an AI model to predict berth congestion, which requires data from terminal operators, shipping lines, the customs agency and the port authority itself. Each party fears losing control of its data and is unclear who would own the combined dataset and the model's outputs. Which TWO elements of a data strategy are MOST important to unblock the initiative? (Select TWO.)",
      "options": [
        "A data-sharing framework that defines what each party contributes, permitted uses, access rules and how value from the model is shared",
        "Clear data ownership and stewardship assignments, including who is accountable for quality and for approving new uses",
        "A requirement that every party hand over full copies of all its data to the port authority with no restrictions",
        "A decision to build the model from the port authority's data alone, ignoring the other sources",
        "An agreement to postpone governance discussions until after the model proves valuable"
      ],
      "answer": [0, 1],
      "explanation": "The concept is the importance of data strategies, ownership and sharing frameworks as the foundation for AI. Multi-party initiatives stall without an explicit framework that specifies contributions, allowed uses, access and benefit sharing, and without named owners and stewards accountable for quality and approvals. Demanding unrestricted copies of everything is precisely the loss of control the parties fear and will be refused. Building from a single source cannot predict congestion that depends on all parties' data. Deferring governance until value is proven inverts the sequence; without agreed terms the data to prove value is never shared."
    },
    {
      "id": "e5-57",
      "domain": 2,
      "skill": "2.3.4",
      "type": "single",
      "difficulty": "hard",
      "question": "A dental network operates in a market where AI adoption is still early, no competitor has deployed AI at scale, and patients choose practices primarily on location and reputation. The board is debating whether to commit a large multi-year budget to become an AI leader or to make modest targeted investments. Which investment posture is MOST appropriate?",
      "options": [
        "Maximum investment across every function, because being first always guarantees lasting advantage",
        "Targeted investments in a few high-value use cases with clear payback, such as scheduling and recall, while building data and governance foundations and monitoring the market for signals that warrant acceleration",
        "No investment until a competitor proves the technology works in dentistry",
        "Invest only in a public relations campaign about AI without changing operations"
      ],
      "answer": [1],
      "explanation": "The concept is determining AI investment levels based on industry maturity and competitive dynamics. In an immature market with low competitive pressure, a measured posture that captures clear-payback use cases, builds foundations and watches for triggers preserves optionality while avoiding over-investment ahead of proven value. First-mover advantage is not guaranteed, especially where customers do not yet choose on AI-enabled attributes. Waiting entirely for a competitor cedes the learning curve and foundational build time that cannot be bought later. A public relations campaign without operational change produces no durable advantage."
    },
    {
      "id": "e5-58",
      "domain": 1,
      "skill": "1.1.6",
      "type": "single",
      "difficulty": "medium",
      "question": "A charity operating in several countries wants to anchor its AI policy to an internationally endorsed, values-based set of principles covering human-centred values, transparency, robustness and accountability, rather than to a certifiable management standard or a single jurisdiction's law. Which reference is the BEST fit?",
      "options": [
        "ISO/IEC 42001, the auditable AI management system standard",
        "The OECD AI Principles, adopted by dozens of governments as values-based guidance for trustworthy AI",
        "The EU AI Act, a binding regulation with risk tiers that applies in the European Union",
        "ISO/IEC 23053, the descriptive framework for machine learning systems"
      ],
      "answer": [1],
      "explanation": "The concept is awareness of global AI frameworks and what each is for. The OECD AI Principles are intergovernmental, values-based principles covering inclusive growth, human-centred values and fairness, transparency and explainability, robustness, security and safety, and accountability, which matches the charity's stated intent. ISO/IEC 42001 is a management system standard organizations certify against, which the charity explicitly did not want. The EU AI Act is enforceable law tied to one jurisdiction, not a universal values statement. ISO/IEC 23053 provides terminology and components for machine learning systems and contains no ethical principles."
    },
    {
      "id": "e5-59",
      "domain": 3,
      "skill": "3.2.4",
      "type": "single",
      "difficulty": "easy",
      "question": "A co-working space operator has inventoried twelve AI use cases, from an internal meeting summarizer to an automated system that decides which applicants are offered memberships. The governance lead proposes putting every use case through the same full-depth review. The AI strategist disagrees. Which approach is MORE appropriate?",
      "options": [
        "Apply a risk classification framework that tiers use cases by potential impact on people and the business, and scale the depth of review and controls to each tier",
        "Review only the use cases the IT team finds technically interesting",
        "Skip reviews entirely because the company is small",
        "Review the meeting summarizer most intensively because it is used most often"
      ],
      "answer": [0],
      "explanation": "The concept is applying AI risk classification frameworks to prioritize governance and compliance effort. Tiering by impact, as frameworks such as the EU AI Act's risk categories and the NIST AI RMF encourage, concentrates deep review on consequential systems such as membership decisions while keeping low-risk tools such as a summarizer on a lighter path. Uniform full-depth review wastes limited capacity and slows harmless tools. Choosing by technical interest or skipping review altogether ignores risk. Frequency of use is not the same as impact; a widely used summarizer poses far less risk than a system that decides who is admitted."
    },
    {
      "id": "e5-60",
      "domain": 4,
      "skill": "4.4.4",
      "type": "single",
      "difficulty": "medium",
      "question": "A travel agency launched an AI trip-planning assistant eight months ago. Usage dashboards show rising adoption, but leadership cannot say whether it is delivering lasting value, and consultants report problems informally with no route to fix them. Which mechanism is MOST appropriate to establish?",
      "options": [
        "A single launch-day survey archived for reference",
        "A continuous feedback loop that captures user and customer feedback, tracks defined success metrics such as booking conversion and consultant time saved against the baseline, and feeds findings into regular improvement cycles",
        "A rule that the assistant is never changed after launch so results remain comparable",
        "Replacing the assistant with a new vendor every year to keep the technology fresh"
      ],
      "answer": [1],
      "explanation": "The concept is establishing continuous feedback mechanisms and success metrics to track progress and long-term value. Adoption alone does not prove value; outcome metrics measured against the pre-launch baseline, combined with structured feedback and an improvement cadence, show whether value is real and sustained. A one-time survey cannot track change over time. Freezing the system prevents the fixes that feedback should drive and lets drift go unaddressed. Changing vendors annually resets learning and measurement and is not a feedback mechanism at all."
    },
    {
      "id": "e5-61",
      "domain": 2,
      "skill": "2.2.1",
      "type": "single",
      "difficulty": "easy",
      "question": "A dental network is defining KPIs for an AI recall assistant that reminds patients to book check-ups. Which option correctly pairs one TANGIBLE benefit with one INTANGIBLE benefit?",
      "options": [
        "Tangible: additional hygiene appointments booked per month; Intangible: patient satisfaction scores",
        "Tangible: patient trust in the practice; Intangible: reduction in receptionist overtime hours",
        "Tangible: brand reputation; Intangible: staff morale",
        "Tangible: number of models deployed; Intangible: revenue growth"
      ],
      "answer": [0],
      "explanation": "The concept is defining KPIs that include tangible benefits such as cost reduction and revenue growth and intangible benefits such as customer satisfaction and employee productivity. Appointments booked translate directly into revenue, making them tangible, while satisfaction scores capture a valuable but not directly monetized outcome, making them intangible. Trust and reputation are intangible, so pairing them as tangible is reversed, and overtime reduction is a tangible cost saving. Reputation and morale are both intangible, so that pair contains no tangible benefit. The number of models deployed is an activity measure rather than a benefit, and revenue growth is tangible, not intangible."
    },
    {
      "id": "e5-62",
      "domain": 1,
      "skill": "1.2.2",
      "type": "multi",
      "difficulty": "hard",
      "question": "A travel agency is designing a multi-agent system for disruption handling: one agent rebooks flights, another rearranges hotels, and a third issues customer notifications. Requirements state that a single coordinating agent must decompose each case, assign subtasks, and consolidate the result before anything is sent to the customer. Which TWO statements about agent capabilities and orchestration are correct? (Select TWO.)",
      "options": [
        "The requirement describes a supervisor or orchestrator pattern, in which a coordinating agent plans, delegates to specialist agents and aggregates their results",
        "The specialist agents exhibit tool use, because each acts on external systems such as booking APIs rather than only generating text",
        "Because the agents communicate with each other, no human oversight point is possible in the workflow",
        "A fully peer-to-peer design with no coordinator is required, because agents cannot be organized hierarchically",
        "Agents are simply chatbots with longer prompts and cannot take actions"
      ],
      "answer": [0, 1],
      "explanation": "The concept is distinguishing AI agents from other solutions and understanding core capabilities such as autonomy, tool use, agent-to-agent communication and orchestration strategies. A coordinating agent that decomposes tasks, delegates and consolidates is the supervisor or orchestrator strategy. Acting on booking systems through APIs is tool use, which is what separates agents from content-only assistants. Agent-to-agent communication does not preclude oversight; the consolidation step is a natural checkpoint for human approval. Peer-to-peer orchestration is one valid pattern but is not required and contradicts the stated need for a coordinator. Agents differ from chatbots precisely because they can take actions."
    },
    {
      "id": "e5-63",
      "domain": 3,
      "skill": "3.2.3",
      "type": "single",
      "difficulty": "medium",
      "question": "A defence contractor's procurement unit (non-sensitive supplier correspondence only) is deciding whether to use Amazon Bedrock. Its security policy requires that prompts never be used to improve third-party models, that model providers never see the unit's data, and that the contractor control who can invoke the assistant. Which statement is accurate?",
      "options": [
        "Amazon Bedrock shares prompts with model providers to improve their models, so the policy cannot be met",
        "Amazon Bedrock does not use customer inputs or outputs to train base models and does not share them with model providers, and the contractor retains responsibility for controlling access to the assistant and classifying the data it submits",
        "Using Amazon Bedrock transfers all access-control decisions to AWS, so the contractor no longer needs to manage permissions",
        "The policy can only be met by training a model from scratch on Amazon SageMaker AI"
      ],
      "answer": [1],
      "explanation": "The concept is identifying appropriate access controls and data security measures for AI systems within the shared responsibility model. AWS states that content submitted to Amazon Bedrock is not used to improve base models and is not shared with model providers, which satisfies the first two policy requirements, while access control and data classification remain the customer's job. Claiming prompts are shared with providers is incorrect. AWS never takes over a customer's permission decisions; identity and access management stays with the customer. Training from scratch on Amazon SageMaker AI is unnecessary for the data-handling requirements and would be a far costlier route."
    },
    {
      "id": "e5-64",
      "domain": 4,
      "skill": "4.3.4",
      "type": "single",
      "difficulty": "medium",
      "question": "At a defence contractor's engineering division, managers decline to pilot AI tools because a documented quality lapse would damage their careers, and the division's culture rewards avoiding mistakes over trying new methods. Which leadership intervention is MOST likely to overcome this barrier?",
      "options": [
        "Mandate AI usage targets for every manager and penalize those who miss them",
        "Create bounded, low-risk pilot spaces with explicit executive permission to experiment, define what a safe failure looks like, and publicly recognize teams that learn from pilots regardless of outcome",
        "Wait for the culture to change on its own as younger staff join",
        "Remove all quality controls so that pilots cannot be blamed for lapses"
      ],
      "answer": [1],
      "explanation": "The concept is recognizing cultural barriers such as risk aversion and fear of failure and choosing leadership interventions that address them. Fear is reduced by making experimentation explicitly sanctioned, bounding the downside, and rewarding learning, which changes the incentive that currently punishes trying. Mandates with penalties add a second fear on top of the first and produce compliance theater rather than adoption. Waiting for generational change leaves the barrier in place for years. Removing quality controls is inappropriate in engineering and would create genuine risk; the aim is safe experimentation, not the absence of standards."
    },
    {
      "id": "e5-65",
      "domain": 2,
      "skill": "2.2.4",
      "type": "multi",
      "difficulty": "medium",
      "question": "A fashion retailer launched an AI visual-search feature four weeks ago. The revenue effect will not be measurable for two quarters, but the steering committee wants early evidence of whether the initiative is on track. Which TWO metrics are the BEST leading indicators? (Select TWO.)",
      "options": [
        "The share of shoppers who use visual search more than once and the click-through rate from search results to product pages",
        "The weekly volume of merchandiser feedback submitted and acted on to improve result relevance",
        "Total annual revenue compared with the previous year",
        "The number of press articles mentioning the retailer",
        "The audited full-year profit figure"
      ],
      "answer": [0, 1],
      "explanation": "The concept is identifying leading indicators that predict AI project success before lagging financial outcomes are available. Repeat usage and click-through show engagement and relevance, which precede conversion and revenue. An active feedback loop with acted-on improvements signals that quality is rising and the team is learning, another early predictor. Annual revenue and audited profit are lagging indicators that arrive long after decisions must be made and are influenced by many other factors. Press coverage reflects publicity, not whether shoppers find the feature useful."
    }
  ]
});
