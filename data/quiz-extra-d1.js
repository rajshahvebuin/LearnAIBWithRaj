window.AIB_DATA = window.AIB_DATA || {};
window.AIB_DATA.domains = window.AIB_DATA.domains || {};
(function(){ var d = window.AIB_DATA.domains["d1"]; if(!d){return;} d.quiz = d.quiz || []; d.quiz.push(
  {
    "id": "d1-q26",
    "skill": "1.1.1",
    "type": "single",
    "difficulty": "easy",
    "question": "A subscription streaming service deploys a churn model that assigns each subscriber a churn score between 0 and 1. The marketing director reads a score of 0.8 as meaning the subscriber \"will definitely cancel\" and wants to send an expensive retention offer to everyone above 0.5. What should the strategist clarify about this output?",
    "options": [
      "The score is a prediction expressing likelihood, so the business should choose an action threshold that balances the cost of offers against the cost of lost subscribers",
      "The score is a certainty because the model was trained on historical data and has already seen the outcome",
      "The score is a training artifact that should be ignored until the model is retrained on current data",
      "The score is an algorithm parameter that the data science team must tune before it can be used"
    ],
    "answer": [0],
    "explanation": "A model output is a prediction, typically a probability or likelihood, not a verdict. Because some predictions will be wrong, the business decides the threshold at which to act by weighing the cost of a wasted offer against the cost of a lost customer. Training on historical outcomes does not make a prediction about a future event certain. The score is a normal inference output, not a stale artifact, so there is no reason to withhold it pending retraining. Model parameters are internal values set during training; the score is the model's output, not something the team tunes."
  },
  {
    "id": "d1-q27",
    "skill": "1.1.2",
    "type": "multi",
    "difficulty": "medium",
    "question": "A board member of a logistics company argues that \"all AI is generative AI now\" and proposes cancelling the company's machine learning roadmap for route optimization and delivery-time prediction in favour of a single large language model. A strategist prepares a response. Which TWO statements are accurate? (Select TWO.)",
    "options": [
      "Generative AI is a subset of machine learning that creates new content such as text, images, or code",
      "Traditional machine learning remains the usual choice for numeric prediction and optimization on structured operational data",
      "A machine learning system is any system that applies programmed if-then rules to data",
      "Generative AI removes the need for training data because foundation models already know every domain",
      "Large language models are the only form of AI that can learn from data",
      "Machine learning models cannot be used for prediction because they only classify historical records"
    ],
    "answer": [0, 1],
    "explanation": "AI is the umbrella, machine learning is the subset that learns patterns from data, and generative AI is the subset of machine learning that produces new content. Predicting delivery times and optimizing routes from structured data are classic predictive and optimization problems where traditional machine learning is cheaper, more accurate, and more explainable. Programmed if-then rules describe rule-based AI, not machine learning, which learns rather than being hand-coded. Foundation models are trained on large datasets and still require company data for adaptation, so training data is not eliminated. Many non-LLM models learn from data, and prediction of future outcomes is a core use of machine learning."
  },
  {
    "id": "d1-q28",
    "skill": "1.1.3",
    "type": "single",
    "difficulty": "medium",
    "question": "A manufacturer is planning a predictive maintenance program. Its data includes time-stamped sensor readings stored in database tables, technicians' free-text repair notes, and photographs of worn components. Which statement MOST accurately describes how these data types affect the plan?",
    "options": [
      "The sensor tables are structured data suited to traditional machine learning, while the notes and photographs are unstructured data that require natural language processing, computer vision, or generative AI to extract value",
      "The notes and photographs must be manually re-entered into spreadsheet columns before any AI technique can use them",
      "Only the photographs are useful for AI because images contain more information than numbers or text",
      "All three sources are structured data because each is stored in a company system with a known owner"
    ],
    "answer": [0],
    "explanation": "Structured data follows a predefined schema of rows and columns, so sensor tables feed traditional machine learning directly. Free-text notes and images are unstructured; natural language processing, computer vision, and generative AI exist precisely to extract value from them, and most enterprise data today is unstructured. Manual re-entry into spreadsheets is unnecessary and would discard the richness that modern techniques can use. Images are not inherently more valuable than well-structured sensor history; the right technique depends on the business question. Being stored in a system with an owner describes data governance, not whether the data has a fixed schema."
  },
  {
    "id": "d1-q29",
    "skill": "1.1.4",
    "type": "single",
    "difficulty": "medium",
    "question": "An e-commerce company trains a model to predict which orders will be returned. The historical \"return reason\" field was entered free-form by staff, is blank on 40 percent of records, and contains variants such as \"dmg\", \"damaged\", and \"broken\" for the same reason. The model performs poorly. Which data-quality issue is the MOST likely cause?",
    "options": [
      "Incomplete and inconsistent records, because missing and unstandardized values prevent the model from learning reliable patterns",
      "Stale data, because the return reasons were recorded in the past rather than at prediction time",
      "Unrepresentative data, because the records come from only one company's customers",
      "Excessive data volume, because the model cannot process the number of historical orders"
    ],
    "answer": [0],
    "explanation": "Completeness and consistency are core data-quality dimensions. A field that is blank on 40 percent of records and uses many spellings for one concept gives the model noisy, fragmented signals, so it cannot learn stable patterns. Timeliness is not the issue: historical labels are expected to be recorded in the past. The data comes from the company's own customers, which is exactly the population the model will serve, so representativeness is not the problem described. Large volume generally helps model training rather than hurting it; the issue is the quality of each record, not the number of records."
  },
  {
    "id": "d1-q30",
    "skill": "1.1.4",
    "type": "multi",
    "difficulty": "hard",
    "question": "A bank is about to train a loan-default prediction model on seven years of lending records. A data review produces several findings. Which TWO findings are the MOST serious data-quality concerns to resolve before training? (Select TWO.)",
    "options": [
      "Roughly 8 percent of customers appear multiple times because of duplicate account records created during a system migration",
      "Branches recorded the \"default\" label inconsistently, with some flagging accounts at 60 days overdue and others at 90 days",
      "The dataset contains 5 million rows, which the team considers larger than necessary",
      "The records are stored in cloud object storage rather than on-premises servers",
      "The column names are descriptive and documented in a data dictionary",
      "The data is exported in CSV format rather than a proprietary database format"
    ],
    "answer": [0, 1],
    "explanation": "Duplicate records distort the training set by overweighting certain customers and can leak the same customer into both training and test data, inflating apparent accuracy. Inconsistent label definitions are even more damaging, because the model is learning to predict a target that means different things in different branches; label quality determines what the model actually learns. Five million rows is a strength, not a problem. Storage location and file format are infrastructure choices with no bearing on whether the data is accurate, complete, or consistent. Documented column names improve usability and are a positive finding."
  },
  {
    "id": "d1-q31",
    "skill": "1.1.5",
    "type": "single",
    "difficulty": "easy",
    "question": "A telecommunications company wants to discover natural groupings among its 4 million customers for targeted marketing. It has rich usage and billing history but has never defined customer segments, so there is no \"correct segment\" label on any record. Which training approach fits this situation?",
    "options": [
      "Unsupervised learning, because the model finds structure in unlabeled data",
      "Supervised learning, because the billing history provides the labels",
      "Reinforcement learning, because the model learns from rewards after each marketing campaign",
      "Rule-based segmentation, because machine learning cannot work without labels"
    ],
    "answer": [0],
    "explanation": "Unsupervised learning discovers patterns, such as clusters of similar customers, in data that has no predefined outcome labels, which is exactly the situation described. Supervised learning requires a labeled target for each record, and billing history is input data, not a label for the segment. Reinforcement learning learns through trial-and-error rewards in an environment, which is not how a one-time segmentation of historical data is produced. Machine learning does work without labels through unsupervised techniques, so falling back to hand-written rules would forgo the data-driven segments the company wants."
  },
  {
    "id": "d1-q32",
    "skill": "1.1.5",
    "type": "single",
    "difficulty": "hard",
    "question": "A credit union plans to train a fraud model on transactions and fraud outcomes from 2019 through 2021. An executive asks what it means, in practical terms, that the model is \"trained on historical data.\" Which statement is MOST accurate?",
    "options": [
      "The model will reflect the patterns and decisions present in that period, including any past bias, and will not recognize fraud patterns that did not exist before 2022",
      "The model will automatically infer future fraud patterns because learning from history generalizes to any new behaviour",
      "The model will be more accurate the further back the history goes, regardless of how banking behaviour has changed",
      "The model needs no labeled fraud outcomes because historical transaction data is sufficient for supervised training"
    ],
    "answer": [0],
    "explanation": "A model learns the relationships that exist in its training data, so it encodes the behaviours, decisions, and biases of 2019 to 2021 and has no knowledge of fraud schemes that emerged later; this is why monitoring and retraining matter. Learning from history does not generalize to genuinely new behaviour that has never been observed. Adding very old data can hurt rather than help if customer behaviour and channels have changed, because the model learns outdated patterns. Supervised fraud detection requires labeled outcomes that mark which historical transactions were fraudulent; raw transactions alone do not teach the model what fraud looks like."
  },
  {
    "id": "d1-q33",
    "skill": "1.1.6",
    "type": "single",
    "difficulty": "medium",
    "question": "A CFO questions why a manufacturing company should align its AI program with global standards such as ISO/IEC 22989 and ISO/IEC 23053 for concepts and ISO/IEC 42001 for management practices, rather than writing its own internal AI policy from scratch. Which response is MOST accurate?",
    "options": [
      "The standards give the company a shared vocabulary with vendors, auditors, and regulators and a recognized management-system structure that can be independently certified",
      "Adopting the standards guarantees compliance with the EU AI Act and removes the need for a separate regulatory review",
      "Certification under ISO/IEC 42001 verifies that each individual AI model is safe and accurate, so model monitoring is no longer required",
      "The standards replace the need for any company-specific AI policy because they prescribe exact rules for every use case"
    ],
    "answer": [0],
    "explanation": "ISO/IEC 22989 and 23053 establish common terminology and a framework for describing AI systems that use machine learning, which reduces misunderstanding across teams and partners; ISO/IEC 42001 specifies requirements for an AI management system that accredited bodies can certify. Alignment does not guarantee legal compliance, and ISO/IEC 42001 is not a harmonized standard that confers presumption of conformity with the EU AI Act. Certification applies to the organization's management system, not to individual models, so monitoring remains necessary. The standards provide structure and vocabulary; organizations still need their own policies tailored to their use cases and risk appetite."
  },
  {
    "id": "d1-q34",
    "skill": "1.2.1",
    "type": "single",
    "difficulty": "medium",
    "question": "A parcel carrier is automating two decisions in its sorting hubs. First, each parcel must be assigned to a sorting lane based on its destination postcode using a published lane table. Second, the carrier wants to estimate each parcel's risk of late delivery based on weather, traffic, hub congestion, and historical performance. Which recommendation is MOST appropriate?",
    "options": [
      "Use rule-based automation for lane assignment and a machine learning model for late-delivery risk",
      "Use machine learning for both decisions so that the system can improve over time",
      "Use rule-based automation for both decisions because sorting operations must be fully predictable",
      "Use a generative AI model for lane assignment and rule-based logic for late-delivery risk"
    ],
    "answer": [0],
    "explanation": "Lane assignment is a deterministic lookup against a known table: the logic is fully specifiable, must be exact and auditable, and rarely changes, so rules are cheaper, faster, and more transparent. Late-delivery risk depends on many interacting, changing factors with no fixed formula, which is where a model that learns from historical outcomes adds value. Applying machine learning to the lookup introduces probabilistic error and cost into a task that needs none. Rules cannot capture the shifting patterns behind delivery delays. Generative AI creates content and is the wrong tool for a table lookup, while rules cannot estimate probabilistic risk."
  },
  {
    "id": "d1-q35",
    "skill": "1.2.2",
    "type": "single",
    "difficulty": "medium",
    "question": "A regional airline receives two proposals. Proposal 1 is a conversational assistant that answers passenger questions about baggage rules from a policy document. Proposal 2 is a system that, when a flight is cancelled, autonomously checks each affected passenger's booking through the reservation system, selects rebooking options, books hotel rooms through a partner API when needed, and notifies the passenger, escalating only unusual cases to staff. Which statement is MOST accurate?",
    "options": [
      "Proposal 2 is an AI agent because it pursues a goal autonomously across multiple steps using external tools, while Proposal 1 is a conversational assistant that only generates answers",
      "Both proposals are AI agents because both use a large language model to interact with passengers",
      "Proposal 1 is an AI agent because answering from a document requires retrieval, which is a form of tool use",
      "Neither proposal is an AI agent because true agents must be built without any foundation model"
    ],
    "answer": [0],
    "explanation": "The defining capabilities of an AI agent are autonomy in pursuing a goal, multi-step planning, and tool use such as calling reservation and hotel APIs, with escalation to humans for exceptions; Proposal 2 shows all of these. Proposal 1 responds to a question with generated text and takes no actions, which makes it a conversational assistant even though it retrieves a document. Using a large language model to talk with passengers does not make a system agentic; taking autonomous action does. Agents are commonly built on foundation models, so the absence of one is not a requirement."
  },
  {
    "id": "d1-q36",
    "skill": "1.2.3",
    "type": "single",
    "difficulty": "medium",
    "question": "A software company's generative AI support assistant has worked well for a year. After the team moves the assistant to a newer version of its foundation model, customers report that answers have become longer and occasionally contradict the product documentation. The team had no way to detect the change before customers did. Which practice would BEST address this gap?",
    "options": [
      "Maintain a representative evaluation set of prompts with expected responses, run it before and after any model or prompt change, and monitor output quality continuously in production",
      "Freeze the assistant on the original model version permanently so that its behaviour never changes",
      "Ask the model provider to certify that each new version behaves identically to the previous one",
      "Retrain the assistant on customer complaints after each release so that it learns from its mistakes"
    ],
    "answer": [0],
    "explanation": "Generative AI performance can shift whenever the underlying model, prompt, or retrieved data changes, so organizations need a baseline evaluation set and ongoing monitoring to detect quality changes before customers do; this is the same monitoring discipline that catches drift in predictive models. Freezing a model version is not sustainable, because providers retire older versions and improvements are forgone. Providers cannot guarantee identical behaviour across versions. Reacting to complaints after release is exactly the problem described, and foundation models are not retrained on individual complaints; detection must happen before deployment."
  },
  {
    "id": "d1-q37",
    "skill": "1.2.4",
    "type": "multi",
    "difficulty": "medium",
    "question": "A university's CIO is designing a classification scheme for AI tools so that staff know which tools are approved, blocked, or under evaluation, and so that shadow AI declines. Which TWO design elements are MOST important for the scheme to be transparent and effective? (Select TWO.)",
    "options": [
      "Publish the criteria used to classify tools, such as data handling, vendor terms, and security review results, alongside the classification itself",
      "Give the \"under evaluation\" status a defined review timeline and a clear request path so staff know how and when a decision will be made",
      "Keep the list confidential to the IT department so that staff cannot challenge classifications",
      "Classify every new tool as blocked indefinitely because evaluation resources are limited",
      "Allow each faculty to maintain its own private list of acceptable tools without central visibility",
      "Perform the classification once at launch and avoid revisiting it so that staff are not confused by changes"
    ],
    "answer": [0, 1],
    "explanation": "Transparency means staff can see not only the status of a tool but also why it received that status, which builds trust and guides them toward compliant alternatives. A time-bound evaluation process with a request path prevents the backlog that pushes people to unofficial tools. Keeping the list confidential defeats the purpose and encourages workarounds. Blocking everything indefinitely drives shadow AI rather than reducing it. Fragmented departmental lists remove the central visibility needed to manage risk. AI tools and vendor terms change rapidly, so classifications must be reviewed periodically."
  },
  {
    "id": "d1-q38",
    "skill": "1.3.1",
    "type": "single",
    "difficulty": "easy",
    "question": "A sales team uses a generative AI assistant on Amazon Bedrock to draft follow-up emails after customer meetings. Representatives type prompts such as \"write a follow-up email\" and complain that the drafts are generic and often the wrong length and tone. Which change to the prompts would MOST improve the output?",
    "options": [
      "Specify the role, the audience, the key points from the meeting, the desired tone and length, and include an example of a good email",
      "Shorten the prompt to a single keyword so that the model is not confused by extra information",
      "Run the same prompt several times and let each representative pick the best draft",
      "Switch to the largest available model so that it can guess what each representative wants"
    ],
    "answer": [0],
    "explanation": "Prompt engineering principles call for clear instructions, relevant context, the intended audience, format and length constraints, and examples where helpful; a vague instruction produces vague output regardless of the model. Reducing the prompt to a keyword removes the context the model needs. Generating multiple drafts of a poorly specified prompt wastes tokens and time without fixing the root cause. A larger model cannot infer meeting details and tone that were never provided, and it raises cost; better prompts are the first and cheapest lever."
  },
  {
    "id": "d1-q39",
    "skill": "1.3.2",
    "type": "single",
    "difficulty": "medium",
    "question": "A bank's customer-service assistant keeps the full transcript of each chat and sends it with every new message. In long conversations, the assistant begins to ignore instructions given at the start of the chat, and the cost per message grows steadily during the session. Which explanation and response are MOST appropriate?",
    "options": [
      "The growing transcript consumes the model's context window and token budget; summarizing or trimming earlier turns while preserving the key instructions keeps the conversation within limits and controls cost",
      "The model has learned bad habits from the customer and must be retrained before it can be used again",
      "The model's temperature setting is too high; lowering it will restore the early instructions",
      "The cost increase is caused by training charges that accrue each time a customer sends a message"
    ],
    "answer": [0],
    "explanation": "Every token sent to the model, including the accumulated history, counts toward the context window and is billed, so long transcripts both crowd out early instructions and raise per-message cost. Managing the history through summarization or trimming is the standard remedy. Foundation models do not learn from individual chats at inference time, so retraining is not the cause or the fix. Temperature affects randomness of word choice, not how much context the model can hold. Inference, not training, is billed per request; no training occurs during a customer conversation."
  },
  {
    "id": "d1-q40",
    "skill": "1.3.3",
    "type": "multi",
    "difficulty": "hard",
    "question": "A law firm is deciding between Retrieval Augmented Generation (RAG) and fine-tuning for an assistant that drafts contract clauses using the firm's precedent library. Which TWO statements accurately describe the trade-offs? (Select TWO.)",
    "options": [
      "RAG lets the assistant cite the source precedents and lets the firm update what the assistant knows by updating the document index rather than retraining a model",
      "Fine-tuning on Amazon Bedrock adds training cost, custom model storage, and typically dedicated inference capacity, so it is best justified by a persistent need for a specific style or format",
      "Fine-tuning is the only way to give a model access to confidential documents",
      "RAG requires the model to be retrained every time a precedent document changes",
      "Fine-tuning eliminates hallucinations, so no human review is needed for fine-tuned output",
      "RAG and fine-tuning are mutually exclusive and cannot be combined in one solution"
    ],
    "answer": [0, 1],
    "explanation": "RAG retrieves relevant documents at query time and feeds them to the model, which enables source attribution and makes updating knowledge as simple as refreshing the index; Amazon Bedrock Knowledge Bases provides this as a managed capability. Fine-tuning changes model behaviour and on Bedrock is billed for training tokens, monthly custom model storage, and dedicated capacity for inference, so it suits persistent style or format needs. Confidential documents are typically served through RAG, not only fine-tuning. RAG specifically avoids retraining when documents change. No technique eliminates hallucinations, so review remains necessary. Many solutions combine a fine-tuned model with retrieval."
  }
); })();
