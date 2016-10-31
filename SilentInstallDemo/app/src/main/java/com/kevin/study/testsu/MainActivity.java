package com.kevin.study.testsu;

import android.app.Activity;
import android.os.Bundle;
import android.os.Environment;
import android.view.Menu;
import android.view.View;
import android.widget.EditText;

import java.io.DataOutputStream;
import java.io.OutputStream;

/**
 * 静默安装 卸载 Demo
 *
 * @author blj
 *
 */
public class MainActivity extends Activity {

	private EditText et_packagename;
	private String cmd_install = "pm install -r ";
	private String cmd_uninstall = "pm uninstall ";
	String apkLocation = Environment.getExternalStorageDirectory().toString()
			+ "/";

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		et_packagename = (EditText) findViewById(R.id.et_packagename);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

	public void onClick_install(View view) {
		String cmd = cmd_install + apkLocation
				+ et_packagename.getText().toString().trim();
		System.out.println("静默安装命令：" + cmd);
		excuteSuCMD(cmd);
	}

	public void onClick_uninstall(View view) {
		String cmd = cmd_uninstall + et_packagename.getText().toString().trim();
		// String cmd = cmd_uninstall + "com.kingsoft.website";
		System.out.println("静默卸载命令：" + cmd);
		excuteSuCMD(cmd);
	}

	protected int excuteSuCMD(String cmd) {
		try {
			Process process = Runtime.getRuntime().exec("su");
			DataOutputStream dos = new DataOutputStream(
					(OutputStream) process.getOutputStream());
			// 部分手机Root之后Library path 丢失，导入path可解决该问题
			dos.writeBytes((String) "export LD_LIBRARY_PATH=/vendor/lib:/system/lib\n");
			cmd = String.valueOf(cmd);
			dos.writeBytes((String) (cmd + "\n"));
			dos.flush();
			dos.writeBytes("exit\n");
			dos.flush();
			process.waitFor();
			int result = process.exitValue();
			return (Integer) result;
		} catch (Exception localException) {
			localException.printStackTrace();
			return -1;
		}
	}

}
