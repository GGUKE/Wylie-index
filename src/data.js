const data = {
	header:[
		{ name: 'HOME', link: '/' },
		{ name: 'BUSINESS', link: '/business' },
		{ name: 'PORTFOLIO', link: '/portfolio' },
		{ name: 'CULTURE', link: '/culture' },
		{ name: 'AWARDS', link: '/awards' },
		{ name: 'CONTACT', link: '/contact' }
	],
	business: [
		{
			title: 'Platform Creation',
			imageUrl: '/images/icon_business1.jpg',
			altText: 'icon_business1',
			services: [
				'웹/앱 플랫폼 디자인',
				'뉴미디어 플랫폼 디자인',
				'웹/모바일 퍼블리싱',
				'jsp / asp / php / .net 개발',
				'iOS / Android개발',
				'클라우드 세팅 / 운영'
			]
		},
		{
			title: 'Marketion COMM.',
			imageUrl: '/images/icon_business1.jpg',
			altText: 'icon_business1',
			services: [
				'마케팅 전략 컨설팅',
				'광고 캠페인 기획 운영',
				'온, 오프 프로모션 기획 운영',
				'바이럴, SNS 기획 운영',
				'마케팅 KPI 관리'
			]
		},
		{
			title: 'Maintenance',
			imageUrl: '/images/icon_business1.jpg',
			altText: 'icon_business1',
			services: [
				'플랫폼 활성화 기획',
				'프로모션, 배너 디자인',
				'호스팅 개발 운영',
				'모니터링, 로그분석, 리포팅',
				'고객 CS 관리'
			]
		}
	],
	portfolio:[
		{
			title: '한화 리조트',
			desc: '영업용 템플릿 온라인 플랫폼 구축',
			imageUrl: '/images/portfolio1.jpg',
			altText: 'portfolio1'
		},
		{
			title: 'ABOUT ME 쇼핑몰',
			desc: '리뉴얼 제작',
			imageUrl: '/images/portfolio2.jpg',
			altText: 'portfolio2'
		},
		{
			title: 'CJ BYO유산균',
			desc: '2016 디지털 캠페인',
			imageUrl: '/images/portfolio3.jpg',
			altText: 'portfolio3'
		},
		{
			title: '대구은행',
			desc: '비대면채널 전략 및 UXUI컨설팅',
			imageUrl: '/images/portfolio4.jpg',
			altText: 'portfolio4'
		},
		{
			title: '대유위니아',
			desc: '서비스 온라인 플랫폼 구축',
			imageUrl: '/images/portfolio5.jpg',
			altText: 'portfolio5'
		},
		{
			title: '쥬비스 다이어트',
			desc: 'APP 3.0 리뉴얼 구축',
			imageUrl: '/images/portfolio6.jpg',
			altText: 'portfolio6'
		}
	],
	culture:[
		{
			imageUrl: '/images/culture1.jpg',
			altText: 'culture1',
			type: 'PLAY',
			title: 'Wyile Club',
			subtitle: '조조 영화, 맛집 탐방, 1박 2일',
			desc: [
			'"잘 노는 것도 능력"이라는 모토 아래,',
			'조조영화를 보고, 맛집을 찾고, 나들이를 떠나며,',
			'잘 놀기만 하면 연말 해외여행 포상까지 기다리고 있는',
			'와일리만의 Friendship Activity입니다.'
			]
		},
		{
			imageUrl: '/images/culture2.jpg',
			altText: 'culture2',
			type: 'PLAY',
			title: 'WYLIE Refresh',
			subtitle: '한 달에 한 번 여유로운 시간',
			desc: [
			'매월 첫 번째 금요일은 여유롭습니다.',
			'점심시간 이후 오후 1시 부터 2시까지 각 팀별/그룹별 간',
			'리프레쉬 시간을 함께 하며 사무실을 벗어나',
			'생기를 되찾습니다.'
			]
		},
		{
			imageUrl: '/images/culture3.jpg',
			altText: 'culture3',
			type: 'EAT',
			title: 'Wyile Kitchen',
			subtitle: '집밥을 함께 하고픈 마음',
			desc: [
			'매일 점심, 모두 모여 함께 식사를 합니다.',
			'바쁜 업무 속에서 식사만큼은 꼭 제대로 된 ‘집밥’을',
			'챙겨 먹어야 하는 와일리의 철학 때문입니다.',
			'정성 가득한 ‘와일리백반’ 덕분에',
			'오늘도 와일리의 프로젝트는 ‘밥심’으로 완성됩니다.'
			]
		},
		{
			imageUrl: '/images/culture4.jpg',
			altText: 'culture4',
			type: 'EAT',
			title: 'WYLIE Cafe',
			subtitle: '커피향과 함께 시작하는 하루',
			desc: [
			'매일 아침, 은은한 커피향이',
			'가득한 곳에서 힘찬 하루를 시작합니다.',
			'커피 한 잔으로 나누는 멤버들의 위로와 수다 속에서',
			'와일리의 크리에이티브는 매일 새롭게 태어납니다.'
			]
		},
		{
			imageUrl: '/images/culture5.jpg',
			altText: 'culture5',
			type: 'STUDY',
			title: 'WYLIE Study',
			subtitle: '학생 때 못 다한 공부 지금도 늦지 않았다',
			desc: [
			'지식의 공유, 업무 스킬의 공유,',
			'상식의 공유, 트렌드 및 환경 변화의 공유 등을 목표로',
			'자유로운 스터디 문화 조성을 통해 개인 및 팀 역량 향상'
			]
		}
	],
	award: [
		{
			title: 'KB스타뱅킹',
			award: 'App Award Korea 2018',
			category: '기술이노베이션',
			result: '대상',
			imageUrl: '/images/img_award1.jpg',
			altText: 'img_award1'
		},
		{
			title: '서울성모병원',
			award: 'Web Award Korea 2018',
			category: '종합의료분야 & 건강/의료분야',
			result: '대상',
			imageUrl: '/images/img_award2.jpg',
			altText: 'img_award2'
		},
		{
			title: '어바웃미',
			award: 'Web Award Korea 2018',
			category: '제품브랜드분야',
			result: '대상',
			imageUrl: '/images/img_award3.jpg',
			altText: 'img_award3'
		}
 	],
	signature: [
		{ src: '/images/signature1.jpg', alt: 'signature1' },
		{ src: '/images/signature2.jpg', alt: 'signature2' },
		{ src: '/images/signature3.jpg', alt: 'signature3' },
		{ src: '/images/signature4.jpg', alt: 'signature4' },
		{ src: '/images/signature5.jpg', alt: 'signature5' },
		{ src: '/images/signature6.jpg', alt: 'signature6' },
		{ src: '/images/signature7.jpg', alt: 'signature7' }
	],
}

export default data;