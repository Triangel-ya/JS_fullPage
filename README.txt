ȫ���������˵���ĵ�������slide.html�ɹۿ�Ч����user����ļ������û��Լ�������ļ��У�

������ܣ�ʵ�ֲ�ͬҳ���ȫ���л���

�÷���1.��html���������뱾�ļ������ļ����е� slide.js �ļ���
        ���뱾�ļ������ļ����е� slide.css  �ļ���
	���뱾�ļ������ļ����е� images  �ļ���

      2.html�����ʽ��
	<div class="slide">//���div,���ڰ�������ҳ���Լ�����ҳ��ĸ�������
	    <div class="slideContainer">//����div����������ҳ�������
	        <div class="slidePage">
			//��һ��ҳ�棬ҳ���ڿ���ֱ���������
	        </div>
	        <div class="slidePage">
	            	//�ڶ���ҳ�棬ҳ���ڿ���ֱ������Զ�������
	        </div>

	        .......

		<div class="slidePage">
	            	//��n��ҳ�棬ҳ���ڿ���ֱ������Զ�������
	        </div>
	    </div>
	    <div class="slideLeft"></div>//���ͷ
	    <div class="slideRight"></div>//�Ҽ�ͷ
	</div>

        3.js�����ʽ��
	  window.onload = function(){
		var slide = new Slide(); //����ʵ����
		slide.initialize(80,20);
		//��ʼ����������һ��������ÿ���ƶ��ľ��룬Ϊ����0������������Ϊ��λ��
		//�ڶ�������Ϊÿ���ƶ���ʱ�䣬ҲΪ����0�������Ժ���Ϊ��λ��	
	   }
